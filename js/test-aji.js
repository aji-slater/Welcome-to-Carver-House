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
var ANCHOR_SET = 0.5
var TILE_POS = 55
var yTilePosition = function(value){
  return - (TILE_POS * value);
};
var xTilePosition = function(value){
  return TILE_POS * value;
};

var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, 'test', null, true, false);

var BasicGame = function (game) { };

BasicGame.Boot = function (game) { };

var floorGroup, activeGroup, itemGroup;
var cursorPos, cursor;
var floorTile, necklace, debugTile;
var yt, xt = 0;

BasicGame.Boot.prototype =
{
    preload: function () {
        game.load.image('tile', 'assets/tiles/wood-floor-tile.png');
        game.load.image('necklace', 'assets/tiles/wood-floor-tile.png');
        game.load.spritesheet('player', 'assets/figure.png', 50, 50);
        game.load.spritesheet('debugTile', 'assets/tiles/debug_tiles.png', 100, 50);

        game.time.advancedTiming = true;

        // Add and enable the plug-in.
        game.plugins.add(new Phaser.Plugin.Isometric(game));

        // This is used to set a game canvas-based offset for the 0, 0, 0 isometric coordinate - by default
        // this point would be at screen coordinates 0, 0 (top left) which is usually undesirable.
        game.iso.anchor.setTo(0.5, 0.2);


    },
    create: function () {

        // Create a group for our tiles.
        floorGroup = game.add.group();
        activeGroup = game.add.group();
        itemGroup = game.add.group();

        // Let's make a load of tiles on a grid.
        this.spawnTiles();

        // Provide a 3D position for the cursor
        cursorPos = new Phaser.Plugin.Isometric.Point3();
    },
    update: function () {
        // Update the cursor position.
        // It's important to understand that screen-to-isometric projection means you have to specify a z position manually, as this cannot be easily
        // determined from the 2D pointer position without extra trickery. By default, the z position is 0 if not set.
        game.iso.unproject(game.input.activePointer.position, cursorPos);

        // Loop through all tiles and test to see if the 3D position from above intersects with the automatically generated IsoSprite tile bounds.
        isoGroup.forEach(function (tile) {

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
    render: function () {
        // game.debug.text("Move your mouse around!", 2, 36, "#ffffff");
        game.debug.text(game.time.fps || '--', 2, 14, "#a7aebe");
    },
    spawnTiles: function () {
        var tile;
        for (var xx = 0; xx < 550; xx += 55) {
            for (var yy = 0; yy < 550; yy += 55) {
                // Create a tile using the new game.add.isoSprite factory method at the specified position.
                // The last parameter is the group you want to add it to (just like game.add.sprite)
                tile = game.add.isoSprite(xx, yy, 0, 'tile', 0, isoGroup);
                tile.anchor.set(0.5, 0);
            }
        }
    }
};

game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');
