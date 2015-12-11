var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create, update: update });

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

function preload() {
  game.load.image('tile', 'images/tiles/wood-floor-tile.png');
  game.plugins.add(new Phaser.Plugin.Isometric(game));
  game.world.setBounds(0, 0, 150, 150);
  // set the middle of the world in the middle of the screen
  game.iso.anchor.setTo(0.5, 0);
}

function create() {
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
  game.iso.topologicalSort(floorGroup);

game.world.scale.setTo(0.8, 0.8);
}

function update() {
}