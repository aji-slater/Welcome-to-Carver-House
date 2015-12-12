var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var floorGroup;
var gameBoard = new GameBoard();
var board = gameBoard.generateBoard();
console.log(board);
var ANCHOR_SET = 0.5
var TILE_POS = 55
var tilePosition = function(gridNumber){
  return gridNumber * 55;
}

function preload() {
  game.load.image('tile', 'assets/tiles/wood-floor-tile.png');
  game.plugins.add(new Phaser.Plugin.Isometric(game));
  game.world.setBounds(0, 0, 1740, 1740);
  // set the middle of the world in the middle of the screen
  game.iso.anchor.setTo(1, 1);
  game.load.spritesheet('player','assets/someguy.png', 95.16, 158.75);
  game.load.spritesheet('debugTile', 'assets/tiles/debug_tiles.png', 100, 50);
  game.load.image('necklace', 'assets/necklace.png');
}

function create() {
  floorGroup = game.add.group();
  activeGroup = game.add.group();
  itemGroup = game.add.group();
  debugGroup = game.add.group();
  var floorTile;
  var xt = 0;
  var yt = 0;



  for (var x = board.length; x > 0; x--) {
    for (var y = board[0].length; y > 0; y--) {

      if(board[x - 1][y - 1] === 1){
        floorTile = game.add.isoSprite(xt, yt, 0, 'tile', 0, floorGroup);
        floorTile.anchor.set(ANCHOR_SET);
      }
      yt += 55;
    }
    xt += 55;
    yt = 0;
  }
  game.iso.topologicalSort(floorGroup);
  playerCreate();
  debugCreate();
  itemCreate();
  game.camera.follow(player);

//change the size of the game board by changing these values ;)
game.world.scale.setTo(0.5, 0.5);
game.camera.follow(player);
}

function update() {
  playerUpdate();

}
