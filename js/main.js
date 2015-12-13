var game = new Phaser.Game(width, height, Phaser.AUTO, 'test', null, true, false);
var BasicGame = function(game) { };
BasicGame.Boot = function(game) { };

BasicGame.Boot.prototype =
{
    preload: function () {
        loadAll();
        game.time.advancedTiming = true;
        game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
        game.plugins.add(new Phaser.Plugin.Isometric(game));
        game.world.setBounds(0, 0, 2048, 2048);


    },
    create: function () {
        floorGroup = game.add.group();
        activeGroup = game.add.group();
        itemGroup = game.add.group();

        generateTiles();
        itemCreate();
        cursorPos = new Phaser.Plugin.Isometric.Point3();
        playerCreate();
        game.camera.follow(player);

    },
    update: function () {
        playerUpdate();

        game.iso.unproject(game.input.activePointer.position, cursorPos);

        itemGroup.forEach(function (tile) {

            var inBounds = necklace.isoBounds.containsXY(cursorPos.x, cursorPos.y);

            if (!tile.selected && inBounds) {
                tile.selected = true;
                tile.frame = 1
                // tile.tint = 0xffff00;
                // game.add.tween(tile).to({ isoZ: 4 }, 200, Phaser.Easing.Quadratic.InOut, true);
            }

            else if (tile.selected && !inBounds) {
                tile.selected = false;
                tile.frame = 0
                // tile.tint = 0xffffff;
                // game.add.tween(tile).to({ isoZ: 0 }, 200, Phaser.Easing.Quadratic.InOut, true);
            }
        });
    },

};

game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');
