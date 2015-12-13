var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var floorGroup;
var gameBoard = new GameBoard();

var ANCHOR_SET = 0.5
var TILE_POS = 55
var yTilePosition = function(value){
  return - (TILE_POS * value);
}
var xTilePosition = function(value){
  return TILE_POS * value;
}

function preload() {

  game.load.image('tile', 'assets/tiles/wood-floor-tile.png');
  game.load.image('eastWallTile', 'assets/tiles/east-wall-tile.png');
  game.load.image('northWallTile', 'assets/tiles/north-wall-tile.png');
  game.plugins.add(new Phaser.Plugin.Isometric(game));
  game.world.setBounds(0, 0, 1740, 1740);
  game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
  // set the middle of the world in the middle of the screen
  game.iso.anchor.setTo(1);
  game.load.spritesheet('player','assets/someguy.png', 95.16, 158.75);
  game.load.spritesheet('debugTile', 'assets/tiles/debug_tiles.png', 100, 50);
  game.load.image('necklace', 'assets/necklace.png');
}

function create() {
  game.physics.isoArcade.gravity.setTo(0, 0, -500);

  floorGroup = game.add.group();
  northWallGroup = game.add.group();
  eastWallGroup = game.add.group();
  activeGroup = game.add.group();
  itemGroup = game.add.group();
  debugGroup = game.add.group();
  var floorTile, wallTile, necklace, debugTile;
  var yt = 0;
  var xt = 0;



  for (var y = 1; y < board.length; y++) {
    for (var x = 1; x < board.length; x++) {

      if(board[y - 1][x - 1] === 1){
        floorTile = game.add.isoSprite(yt, xt, 0, 'tile', 0, floorGroup);
        floorTile.anchor.set(ANCHOR_SET);
      }
      else if(board[y - 1][x - 1] === 2){
        eastWallTile = game.add.isoSprite(yt, xt, 0, 'eastWallTile', 0, eastWallGroup);
        eastWallTile.anchor.set(ANCHOR_SET);
      }
      else if(board[y - 1][x - 1] === 3){
        northWallTile = game.add.isoSprite(yt, xt, 0, 'northWallTile', 0, northWallGroup);
        northWallTile.anchor.set(ANCHOR_SET);
      }
      xt -= TILE_POS;
    }
    yt += TILE_POS;
    xt = 0;
  }
  game.iso.topologicalSort(floorGroup);
  debugCreate();
  itemCreate();
  playerCreate();
  game.camera.follow(player);

//change the size of the game board by changing these values ;)
game.world.scale.setTo(0.5, 0.5);
game.camera.follow(player);
}

function update() {
  playerUpdate();

}
