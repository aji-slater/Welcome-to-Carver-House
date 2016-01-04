function Character() {
  this.sprite = null;
}

Character.prototype = {

  determinePlayerStart: function(){
    var aboveAverageRooms = [];
    var meanArea = gameBoard.avgArea();
    for ( i = gameBoard.rooms.length - 1; i >= 0; i-- ){
      if (gameBoard.rooms[i].area() >= meanArea) {
        aboveAverageRooms.push(gameBoard.rooms[i]);
      }
    }
    var index = Math.floor(Math.random() * aboveAverageRooms.length);
    return aboveAverageRooms[index];
  },

  playerCreate: function(){
    var playerStartingRoom = this.determinePlayerStart();
    var startingX = playerStartingRoom.centerX();
    var startingY = playerStartingRoom.centerY();
    this.sprite = game.add.isoSprite(xTilePosition(startingX), yTilePosition(startingY), 0, 'player', 15, activeGroup);
    game.physics.isoArcade.enable(this.sprite);
    this.sprite.body.setSize(10, 10, 40);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor.set(0.5);

    this.sprite.animations.add('left', [41, 42, 43, 44, 45, 46, 47], 20, true);
    this.sprite.animations.add('right', [49, 50, 51, 52, 53, 54, 55], 20, true);
    this.sprite.animations.add('down', [33, 34, 35, 36, 37, 38, 39], 20, true);
    this.sprite.animations.add('up', [57, 58, 59, 60, 61, 62, 63], 20, true);

    this.sprite.animations.add('sw', [1, 2, 3, 4, 5, 6, 7], 10, true);
    this.sprite.animations.add('nw', [9, 10, 11, 12, 13, 14, 15], 20, true);
    this.sprite.animations.add('se', [17, 18, 19, 20, 21, 22, 23], 20, true);
    this.sprite.animations.add('ne', [25, 26, 27, 28, 29, 30, 31], 20, true);
    // this.sprite.animations.add('player_perish', [4], 10, false);
  },

  playerUpdate: function(){
    var cursors = game.input.keyboard.createCursorKeys();
    var wasd = {
      up: game.input.keyboard.addKey(Phaser.Keyboard.W),
      down: game.input.keyboard.addKey(Phaser.Keyboard.S),
      left: game.input.keyboard.addKey(Phaser.Keyboard.A),
      right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };
    this.sprite.body.velocity.x = 0;
    this.sprite.body.velocity.y = 0;
    var playerSpeed = 150;

  if ((cursors.down.isDown && cursors.left.isDown )||(wasd.down.isDown && wasd.left.isDown )){
      this.sprite.body.velocity.y = playerSpeed;
      this.sprite.animations.play('sw');
    }
    else if ((cursors.up.isDown && cursors.left.isDown)||(wasd.up.isDown && wasd.left.isDown)){
      this.sprite.body.velocity.x = -playerSpeed;
      this.sprite.animations.play('nw');
    }
    else if ((cursors.up.isDown && cursors.right.isDown)||(wasd.up.isDown && wasd.right.isDown)){
      this.sprite.body.velocity.y = -playerSpeed;
      this.sprite.animations.play('ne');
    }
    else if ((cursors.down.isDown && cursors.right.isDown)||(wasd.down.isDown && wasd.right.isDown)){
      this.sprite.body.velocity.x = playerSpeed;
      this.sprite.animations.play('se');
    }
    else if ((cursors.up.isDown)||(wasd.up.isDown)){
      this.sprite.body.velocity.x = -playerSpeed + 55;
      this.sprite.body.velocity.y = -playerSpeed + 55;
      this.sprite.animations.play('up');
    }
    else if ((cursors.down.isDown)||(wasd.down.isDown)){
      this.sprite.body.velocity.x = playerSpeed -55;
      this.sprite.body.velocity.y = playerSpeed -55;
      this.sprite.animations.play('down');
    }
    else if((cursors.left.isDown)||(wasd.left.isDown)){
      this.sprite.body.velocity.x = -playerSpeed +55;
      this.sprite.body.velocity.y = playerSpeed -55;
      this.sprite.animations.play('left');
    }
    else if ((cursors.right.isDown)||(wasd.right.isDown)){
      this.sprite.body.velocity.x = playerSpeed -55;
      this.sprite.body.velocity.y = -playerSpeed +55;
      this.sprite.animations.play('right');
    }
    else {
      this.sprite.animations.stop();
      this.sprite.body.velocity.x = 0;
      this.sprite.body.velocity.y = 0;
    }
  },

  perish: function(){
    this.sprite.kill();
    var perish = game.add.sprite(game.camera.x + window.innerWidth/2, game.camera.y + window.innerHeight/2, 'player_perish');
    perish.anchor.set(0.5);
    perish.animations.add('player_perish', [0, 1, 2, 3, 4], 3, false);
    perish.animations.play('player_perish', 5, false);
  }
};
