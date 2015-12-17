var playerStartingRoom;
var playerCreate = function(){
  playerStartingRoom = determinePlayerStart();
  var startingX = playerStartingRoom.centerX();
  var startingY = playerStartingRoom.centerY();
  player = game.add.isoSprite(xTilePosition(startingX), yTilePosition(startingY), 0, 'player', 15, activeGroup);
  game.physics.isoArcade.enable(player);
  player.body.setSize(10, 10, 40);
  player.body.collideWorldBounds = true;


  player.anchor.set(0.5);



   player.animations.add('left', [41, 42, 43, 44, 45, 46, 47], 10, true);
   player.animations.add('right', [49, 50, 51, 52, 53, 54, 55], 10, true);
   player.animations.add('down', [33, 34, 35, 36, 37, 38, 39], 10, true);
   player.animations.add('up', [57, 58, 59, 60, 61, 62, 63], 10, true);

   player.animations.add('sw', [1, 2, 3, 4, 5, 6, 7], 10, true);
   player.animations.add('nw', [9, 10, 11, 12, 13, 14, 15], 10, true);
   player.animations.add('se', [17, 18, 19, 20, 21, 22, 23], 10, true);
   player.animations.add('ne', [25, 26, 27, 28, 29, 30, 31], 10, true);
   player.animations.add('player_perish', [4], 10, false);
 };

 var playerUpdate = function(){
   // var isoKeys = game.input.keyboard.addKeys( { 'nw': Phaser.Keyboard.Q, 'sw': Phaser.Keyboard.A, 'ne': Phaser.Keyboard.W, 'se': Phaser.Keyboard.S } );
   var cursors = game.input.keyboard.createCursorKeys();
   this.wasd = {
                up: game.input.keyboard.addKey(Phaser.Keyboard.W),
                down: game.input.keyboard.addKey(Phaser.Keyboard.S),
                left: game.input.keyboard.addKey(Phaser.Keyboard.A),
                right: game.input.keyboard.addKey(Phaser.Keyboard.D),
            };
   player.body.velocity.x = 0;
   player.body.velocity.y = 0;

  if ((cursors.down.isDown && cursors.left.isDown )||(wasd.down.isDown && wasd.left.isDown )){
     player.body.velocity.y = 150;
     player.animations.play('sw');
   }
   else if ((cursors.up.isDown && cursors.left.isDown)||(wasd.up.isDown && wasd.left.isDown)){
      player.body.velocity.x = -150;
      player.animations.play('nw');
     }
   else if ((cursors.up.isDown && cursors.right.isDown)||(wasd.up.isDown && wasd.right.isDown)){
      player.body.velocity.y = -150;
      player.animations.play('ne');
     }
   else if ((cursors.down.isDown && cursors.right.isDown)||(wasd.down.isDown && wasd.right.isDown)){
      player.body.velocity.x = 150;
      player.animations.play('se');
     }
  else if ((cursors.up.isDown)||(wasd.up.isDown)){
     player.body.velocity.x = -150;
     player.body.velocity.y = -150;
     player.animations.play('up');
    }
  else if ((cursors.down.isDown)||(wasd.down.isDown)){
     player.body.velocity.x = 150;
     player.body.velocity.y = 150;
     player.animations.play('down');
    }
  else if((cursors.left.isDown)||(wasd.left.isDown)){
    player.body.velocity.x = -100;
    player.body.velocity.y = 100;
    player.animations.play('left');
  }
  else if ((cursors.right.isDown)||(wasd.right.isDown)){
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

var determinePlayerStart = function(){
  var aboveAverageRooms = [];
  var meanArea = gameBoard.avgArea();
  for ( i = gameBoard.rooms.length - 1; i >= 0; i-- ){
    if (gameBoard.rooms[i].area() >= meanArea) {
      aboveAverageRooms.push(gameBoard.rooms[i]);
    }
  }
  var index = Math.floor(Math.random() * aboveAverageRooms.length);
  return aboveAverageRooms[index];

};

function playerPerish(){
  player.kill();
  var perish = game.add.sprite(game.camera.x + window.innerWidth/2, game.camera.y + window.innerHeight/2, 'player_perish');
  perish.anchor.set(0.5);
  perish.animations.add('player_perish', [0, 1, 2, 3, 4], 3, false);
  perish.animations.play('player_perish', 5, false);
  // perish.animations.stop('player_perish', [0, 1, 2, 3, 4], 5, false);
}

function zoomForDeath(){
  game.world.scale.setTo(1.3, 1.3);
}
