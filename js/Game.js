BasicGame.Game = function(game) {
  this.collision = false;
};

BasicGame.Game.prototype =
{
  preload: function () {
    game.time.advancedTiming = true;
    game.world.setBounds(0, 0, 5500, 6500);
    game.iso.anchor.setTo(0.5, 0.2);
    game.world.scale.setTo(0.2, 0.2);
  },

  create: function () {
    game.physics.isoArcade.gravity.setTo(0, 0, -500);
    emptyGroup = game.add.group();
    floorGroup = game.add.group();
    wallGroup = game.add.group();
    furnishGroup = game.add.group();
    exitGroup = game.add.group();
    activeGroup = game.add.group();
    menuGroup = game.add.group();
    enemyGroup = game.add.group();
    itemGroup = game.add.group();
    inventory = [];
    playerCreate();
    generateTiles();
    generateWalls();
    generateExit();
    itemController.seed();
    // tableCreate();
    configPathFinding();
    // createGhosts();
    setGhostPaths();
    hudDisplay();
    hudClick();


    cursorPos = new Phaser.Plugin.Isometric.Point3();
    game.camera.follow(player);



  },

  update: function () {

    if (!isPaused){
      game.iso.unproject(game.input.activePointer.position, cursorPos);
      playerUpdate();
      if (playerAlive){
        moveGhosts();
        // illuminate();
        checkGhostCollision();
      }
      wallCheck();
      game.physics.isoArcade.collide(player, emptyGroup);
      game.physics.isoArcade.collide(enemyGroup, emptyGroup);
      game.physics.isoArcade.collide(player, exitGroup, function(player){
        // alert("You won!");
        if(unlocked){
          player.kill();
          game.state.start('Win');
        }
      });
    }

  },

  quitGame: function(pointer) {
      this.state.start('MainMenu');
  },

  render: function () {
    // emptyGroup.forEach(function (tile) {
    //     game.debug.body(tile, 'rgba(189, 221, 235, 0.6)', false);
    // });
  //   exitGroup.forEach(function (exit) {
  //     game.debug.body(exit, 'rgba(189, 221, 235, 0.6)', false);
  //     game.debug.spriteBounds(exit, 'pink', false);
  // });

  //   game.debug.body(player, 'rgba(189, 221, 235, 0.6)', false);

  }

};
