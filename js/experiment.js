// var width = window.innerWidth;
// var height = window.innerHeight;
// var game = new Phaser.Game(width, height, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// var floorGroup;

// function preload() {
//   game.load.image('tile', 'assets/tiles/wood-floor-tile.png');
//   game.plugins.add(new Phaser.Plugin.Isometric(game));
//   game.world.setBounds(0, 0, 2048, 2048);
//   game.iso.anchor.setTo(0);
//   game.load.spritesheet('debugTile', 'assets/tiles/debug_tiles.png', 100, 50);
// }

// function create() {
//   floorGroup = game.add.group();
//   var xt, yt, xx, yy = 0;
//       floorTile = game.add.isoSprite(xt, yt, 0, 'tile', 0, floorGroup);
//       floorTile.anchor.set(0.5);


//   while ( xx <= 20 ){
//     while ( yy <= 20 ){
//       floorTile = game.add.isoSprite(xt, yt, 0, 'tile', 0, floorGroup);
//       floorTile.anchor.set(0.5);
//       yt += 55
//       yy++
//     };
//     xt += 55
//     yt = 0
//     xx++
//   };
// }

// function update(){

// }
var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, 'test', null, true, false);

var BasicGame = function (game) { };

BasicGame.Boot = function (game) { };

var isoGroup, cursorPos, cursor, floorGroup, activeGroup, itemGroup, debugGroup;
var gameBoard = new GameBoard();

var ANCHOR_SET = 0.5
var TILE_POS = 55
var yTilePosition = function(value){
  return - (TILE_POS * value);
}
var xTilePosition = function(value){
  return TILE_POS * value;
}


BasicGame.Boot.prototype =
{
    preload: function () {
  game.load.image('tile', 'assets/tiles/wood-floor-tile.png');
  game.plugins.add(new Phaser.Plugin.Isometric(game));
  game.world.setBounds(0, 0, 1740, 1740);
  // set the middle of the world in the middle of the screen
  game.iso.anchor.setTo(1);
  game.load.spritesheet('player','assets/someguy.png', 95.16, 158.75);
  game.load.spritesheet('debugTile', 'assets/tiles/debug_tiles.png', 100, 50);
  game.load.image('necklace', 'assets/necklace.png');
    },


    create: function () {

  floorGroup = game.add.group();
  activeGroup = game.add.group();
  itemGroup = game.add.group();
  debugGroup = game.add.group();
  var floorTile, necklace, debugTile;
  var yt = 0;
  var xt = 0;



  for (var y = 1; y < board.length; y++) {
    for (var x = 1; x < board.length; x++) {

      if(board[y - 1][x - 1] === 1){
        floorTile = game.add.isoSprite(yt, xt, 0, 'tile', 0, floorGroup);
        floorTile.anchor.set(ANCHOR_SET);
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
cursorPos = new Phaser.Plugin.Isometric.Point3();
    },
    update: function () {
        playerUpdate();
        // Update the cursor position.
        // It's important to understand that screen-to-isometric projection means you have to specify a z position manually, as this cannot be easily
        // determined from the 2D pointer position without extra trickery. By default, the z position is 0 if not set.
        game.iso.unproject(game.input.activePointer.position, cursorPos);
        console.log(cursorPos);
        // Loop through all tiles and test to see if the 3D position from above intersects with the automatically generated IsoSprite tile bounds.
        floorGroup.forEach(function (tile) {

            var inBounds = tile.isoBounds.containsXY(cursorPos.x, cursorPos.y);
            // If it does, do a little animation and tint change.
            if (!tile.selected && inBounds) {
                tile.selected = true;
                tile.tint = 0x86bfda;
                game.add.tween(tile).to({ isoZ: 4 }, 200, Phaser.Easing.Quadratic.InOut, true);
            }
            // If not, revert back to how it was.
            else if (tile.selected && !inBounds) {
                tile.selected = false;
                tile.tint = 0xffffff;
                game.add.tween(tile).to({ isoZ: 0 }, 200, Phaser.Easing.Quadratic.InOut, true);
            }
        });
    },
};

game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');
