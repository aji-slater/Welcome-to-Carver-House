
// create
  var playerCreate = function(){

    player = game.add.isoSprite(400, -250, 0, 'player', 15, activeGroup);
    game.physics.isoArcade.enable(player);
    player.body.collideWorldBounds = true;

    player.animations.add('left', [41, 42, 43, 44, 45, 46, 47], 10, true);
    player.animations.add('right', [49, 50, 51, 52, 53, 54, 55], 10, true);
    player.animations.add('up', [57, 58, 59, 60, 61, 62, 63], 10, true);
    player.animations.add('down', [33, 34, 35, 36, 37, 38, 39], 10, true);

    player.anchor.set(0.5, 0);
  };

// update
  var playerUpdate = function(){
    var cursors = game.input.keyboard.createCursorKeys();
    player.body.velocity.x = 0;

   if(cursors.left.isDown){
     player.body.velocity.x = -150;
     player.animations.play('left');
   }
   else if (cursors.right.isDown){
     player.body.velocity.x = 150;
     player.animations.play('right');
    }
   else if (cursors.down.isDown){
     player.body.velocity.y = 150;
     player.animations.play('down');
    }
   else if (cursors.up.isDown){
     player.body.velocity.y = -150;
     player.animations.play('up');
    } else {
    player.animations.stop();
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    //player.frame = 4;
    }
  // {
  //  player.body.velocity.y = -350;
  // }
};

