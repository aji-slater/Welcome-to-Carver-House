var game = new Phaser.Game(width, height, Phaser.AUTO, 'test', null, true, false);
var BasicGame = function (game) { };
BasicGame.Boot = function (game) { };

BasicGame.Boot.prototype =
{
    preload: function () {
        loadAll();

        game.time.advancedTiming = true;
        // Add and enable the plug-in.
        game.plugins.add(new Phaser.Plugin.Isometric(game));
        // This is used to set a game canvas-based offset for the 0, 0, 0 isometric coordinate - by default
        // this point would be at screen coordinates 0, 0 (top left) which is usually undesirable.
        game.iso.anchor.setTo(0.5, 0.2);


    },
    create: function () {
        // game.world.scale.setTo(0.5, 0.5);

        // Create a group for our tiles.
        floorGroup = game.add.group();
        activeGroup = game.add.group();
        itemGroup = game.add.group();

        // Let's make a load of tiles on a grid.
        // this.spawnTiles();
        generateTiles();

        // Provide a 3D position for the cursor
        cursorPos = new Phaser.Plugin.Isometric.Point3();
    },
    update: function () {
        // Update the cursor position.
        // It's important to understand that screen-to-isometric projection means you have to specify a z position manually, as this cannot be easily
        // determined from the 2D pointer position without extra trickery. By default, the z position is 0 if not set.
        game.iso.unproject(game.input.activePointer.position, cursorPos);

        // Loop through all tiles and test to see if the 3D position from above intersects with the automatically generated IsoSprite tile bounds.
        floorGroup.forEach(function (tile) {

            var inBounds = tile.isoBounds.containsXY(cursorPos.x, cursorPos.y);
            // If it does, do a little animation and tint change.
            if (!tile.selected && inBounds) {
                tile.selected = true;
                tile.tint = 0xffffff;
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
