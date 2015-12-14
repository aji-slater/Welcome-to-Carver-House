BasicGame.Game = function(game) { };

BasicGame.Game.prototype =
{
  preload: function () {
    game.time.advancedTiming = true;
    game.world.setBounds(0, 0, 2048, 2048);
  },

  create: function () {

    generateTiles();
    playerCreate();

    cursorPos = new Phaser.Plugin.Isometric.Point3();
    game.camera.follow(player);
  },

  update: function () {
    playerUpdate();

    game.iso.unproject(game.input.activePointer.position, cursorPos);

    floorGroup.forEach(function (tile) {

      var inBounds = tile.isoBounds.containsXY(cursorPos.x, cursorPos.y);

      if (!tile.selected && inBounds) {
        tile.selected = true;
        tile.tint = 0xffffff;
        game.add.tween(tile).to({ isoZ: 4 }, 200, Phaser.Easing.Quadratic.InOut, true);
      }

      else if (tile.selected && !inBounds) {
        tile.selected = false;
        tile.tint = 0xffffff;
        game.add.tween(tile).to({ isoZ: 0 }, 200, Phaser.Easing.Quadratic.InOut, true);
        }
    });
  },
  quitGame: function(pointer) {
      this.state.start('MainMenu');
  }

};
