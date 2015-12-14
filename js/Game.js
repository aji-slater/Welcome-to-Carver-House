BasicGame.Game = function(game) {
  var ghost;

};

BasicGame.Game.prototype =
{
  preload: function () {
    game.time.advancedTiming = true;
    game.world.setBounds(0, 0, 5000, 6000);
    game.iso.anchor.setTo(0.5, 0.2);
  },

  create: function () {
    floorGroup = game.add.group();
    furnishGroup = game.add.group();
    itemGroup = game.add.group();
    activeGroup = game.add.group();
    menuGroup = game.add.group();
    enemyGroup = game.add.group();

    playerCreate();
    generateTiles();
    generateWalls();
    itemCreate();
    itemInputs();
    hudDisplay();
    tableCreate();
    configPathFinding();
    ghost = createGhost();
    setPathFinderInterval();


    cursorPos = new Phaser.Plugin.Isometric.Point3();
    game.camera.follow(player);
  },

  update: function () {
    game.iso.unproject(game.input.activePointer.position, cursorPos);
    playerUpdate();
    moveGhost(ghost);
    illuminate();
    itemInteract();
    checkGhostCollision();
  },

  quitGame: function(pointer) {
      this.state.start('MainMenu');
  }

};
