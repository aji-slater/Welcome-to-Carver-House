BasicGame.Game = function(game) {
  this.collision = false;

};

BasicGame.Game.prototype =
{
  init: function() {
  },

  preload: function () {
    game.time.advancedTiming = true;
    game.world.setBounds(0, 0, 5500, 6500);
    game.iso.anchor.setTo(0.5, 0.2);
    // game.world.scale.setTo(0.2, 0.2);
  },

  create: function () {
    player = new Character();
    this.adjustLevel();
    gameBoard = new GameBoard();
    board = gameBoard.board;
    boardSides = board.length;
    gameBoard.generateBoard(boardSize, boardSize);

    game.physics.isoArcade.gravity.setTo(0, 0, -500);
    emptyGroup = game.add.group();
    floorGroup = game.add.group();
    wallGroup = game.add.group();
    furnishGroup = game.add.group();
    itemGroup = game.add.group();
    exitGroup = game.add.group();
    activeGroup = game.add.group();
    menuGroup = game.add.group();
    enemyGroup = game.add.group();
    player.playerCreate();
    generateTiles();
    generateWalls();
    generateExit();
    itemController.seed();
    //seed inventory with key for testing
    // inventory[0] = "Key";
    configPathFinding();
    createGhosts();
    setGhostPaths();
    hudDisplay();
    hudClick();


    cursorPos = new Phaser.Plugin.Isometric.Point3();
    game.camera.follow(player.sprite);



  },

  update: function () {

    if (!isPaused){
      game.iso.unproject(game.input.activePointer.position, cursorPos);
      player.playerUpdate();
      moveGhosts();
      illuminate();
      checkGhostCollision();
      wallCheck();
      game.physics.isoArcade.collide(player.sprite, emptyGroup);
      game.physics.isoArcade.collide(enemyGroup, emptyGroup);
      game.physics.isoArcade.collide(player.sprite, exitGroup, function(player){
        if(unlocked){
          player.kill();
          if(level === 5){
            level = 0;
            game.state.start('Win');
          }
            game.state.start('Game');

        }
      });
    }

  },

  quitGame: function(pointer) {
      this.state.start('MainMenu');
  },

  shutdown: function(){
    unlocked = false;
    emptyGroup = [];
    floorGroup = [];
    wallGroup = [];
    itemGroup = [];
    furnishGroup = [];
    exitGroup = [];
    activeGroup = [];
    menuGroup = [];
    enemyGroup = [];
    inventory = [];
    gameBoard = null;
    player = null;
    activeItem = null;
    hudItem = null;
    hudFrame = null;

    level++
  },

  adjustLevel: function(){
    enemySpeed += 20;
    switch (level) {
      case 1:
        boardSize = 20;
        break;
      case 2:
        boardSize = 30;
        enemyNum += 3
        break;
      case 3:
        boardSize = 40;
        enemyNum += 3
        break;
      case 4:
        boardSize = 50;
        enemyNum += 3
        break;
      case 5:
        boardSize = 60;
        enemyNum += 3
        break;
      default:
    }
  },

  render: function () {

    // emptyGroup.forEach(function (tile) {
    //   game.debug.body(tile, 'rgba(189, 221, 235, 0.6)', false);
    // });

    // exitGroup.forEach(function (exit) {
    //      game.debug.body(exit, 'rgba(189, 221, 235, 0.6)', false);
    //      game.debug.spriteBounds(exit, 'pink', false);
    //  });

  //   enemyGroup.forEach(function(enemy){
  //     game.debug.body(enemy, 'rgba(189, 221, 235, 0.6)', false);
  //   });

  //   game.debug.body(player, 'rgba(189, 221, 235, 0.6)', false);

  // }

};
