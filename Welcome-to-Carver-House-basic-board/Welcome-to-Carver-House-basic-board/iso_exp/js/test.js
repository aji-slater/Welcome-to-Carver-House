var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, '');
var floorGroup, player;

var BasicGame = function (game) { };
BasicGame.Boot = function (game) { };

var floorGroup;
var board = [[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0]];


BasicGame.Boot.prototype =
{
  preload:function() {
    game.load.image('tile', 'images/tiles/wood-floor-tile.png');
    game.plugins.add(new Phaser.Plugin.Isometric(game));
    game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
    game.world.setBounds(0, 0, 150, 150);
    game.iso.anchor.setTo(0.5, 0);
    game.load.spritesheet('player','images/someguy.png', 95.16, 158.75);
  },
  create:function() {
    floorGroup = game.add.group();
    var floorTile;
    var xt = 140;
    var yt = 140;


    for (var x = board.length; x > 0; x--) {
      for (var y = board[0].length; y > 0; y--) {

        if(board[x - 1][y - 1] === 1){
          floorTile = game.add.isoSprite(xt + 1100, yt + 600, 0, 'tile', 0, floorGroup);
          floorTile.anchor.set(1);
        }
        yt -= 55;
      }
      xt -= 55;
      yt = 140;
    }
    game.physics.isoArcade.collide(floorGroup);
    game.iso.topologicalSort(floorGroup);
    game.physics.isoArcade.gravity.setTo(0, 0, -500);
    game.world.scale.setTo(0.8, 0.8);

    player = game.add.isoSprite(350, 280, 15, 'player', 15, floorGroup);

    game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.collideWorldBounds = true;

    player.animations.add('left', [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 10, true);
    player.animations.add('right', [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], 10, true);
    player.animations.add('up', [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47], 10, true);
    player.animations.add('down', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10, true);

  },
  update:function() {
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
  
     player.body.velocity.x = 150;
     
     player.animations.play('down');
    }
   else if (cursors.up.isDown){

     player.body.velocity.x = 150;
     
     player.animations.play('up');
    } else {
   player.animations.stop();
   player.frame = 4;
    }
  {
   player.body.velocity.y = -350;
  }
  }
  };
game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');
