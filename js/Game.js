BasicGame.Game = function(game) { };

BasicGame.Game.prototype =
{
  preload: function () {
    game.time.advancedTiming = true;
    game.world.setBounds(0, 0, 5000, 6000);
    game.iso.anchor.setTo(0.5, 0.2);
  },

  create: function () {
    game.physics.isoArcade.gravity.setTo(0, 0, -500);
    emptyGroup = game.add.group();
    floorGroup = game.add.group();
    furnishGroup = game.add.group();
    itemGroup = game.add.group();
    activeGroup = game.add.group();
    menuGroup = game.add.group();

    playerCreate();
    generateTiles();
    generateWalls();
    // itemCreate();
    // itemInputs();
    hudDisplay();
    tableCreate();

    cursorPos = new Phaser.Plugin.Isometric.Point3();
    game.camera.follow(player);
  },

  update: function () {
    game.iso.unproject(game.input.activePointer.position, cursorPos);
    playerUpdate();
    illuminate();
    itemInteract();
    game.physics.isoArcade.collide(emptyGroup, player);

  },

  quitGame: function(pointer) {
      this.state.start('MainMenu');
  }

};
