var playerCreate = function(){

   player = game.add.isoSprite(400, -250, 0, 'player', 15, activeGroup);
   game.physics.isoArcade.enable(player);
   player.body.collideWorldBounds = true;


   player.animations.add('left', [41, 42, 43, 44, 45, 46, 47], 10, true);
   player.animations.add('right', [49, 50, 51, 52, 53, 54, 55], 10, true);
   player.animations.add('down', [33, 34, 35, 36, 37, 38, 39], 10, true);
   player.animations.add('up', [57, 58, 59, 60, 61, 62, 63], 10, true);

   player.animations.add('sw', [1, 2, 3, 4, 5, 6, 7], 10, true);
   player.animations.add('nw', [9, 10, 11, 12, 13, 14, 15], 10, true);
   player.animations.add('se', [17, 18, 19, 20, 21, 22, 23], 10, true);
   player.animations.add('ne', [25, 26, 27, 28, 29, 30, 31], 10, true);
   player.animations.add('death', [64, 65, 66, 67, 68], 5, true);

   player.anchor.set(0.5, 0);
 };

 var playerUpdate = function(){
   var isoKeys = game.input.keyboard.addKeys( { 'nw': Phaser.Keyboard.Q, 'sw': Phaser.Keyboard.A, 'ne': Phaser.Keyboard.W, 'se': Phaser.Keyboard.S } );
   var cursors = game.input.keyboard.createCursorKeys();
   player.body.velocity.x = 0;
   player.body.velocity.y = 0;

  if (cursors.down.isDown && cursors.left.isDown){
     player.body.velocity.y = 150;
     player.animations.play('sw');
   }
   else if (cursors.up.isDown && cursors.left.isDown){
      player.body.velocity.x = -150;
      player.animations.play('nw');
     }
   else if (cursors.up.isDown && cursors.right.isDown){
      player.body.velocity.y = -150;
      player.animations.play('ne');
     }
   else if (cursors.down.isDown && cursors.right.isDown){
      player.body.velocity.x = 150;
      player.animations.play('se');
     }
  else if (cursors.up.isDown){
     player.body.velocity.x = -150;
     player.body.velocity.y = -150;
     player.animations.play('up');
    }
  else if (cursors.down.isDown){
     player.body.velocity.x = 150;
     player.body.velocity.y = 150;
     player.animations.play('down');
    }
  else if(cursors.left.isDown){
    player.body.velocity.x = -100;
    player.body.velocity.y = 100;
    player.animations.play('left');
  }
  else if (cursors.right.isDown){
    player.body.velocity.x = 100;
    player.body.velocity.y = -100;
    player.animations.play('right');
  }
  else {
    player.animations.stop();
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
  }
};
