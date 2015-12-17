
var easyStar = new EasyStar.js();
var timeStep = 400;
var currentPlayerXtile;
var currentPlayerYtile;
var currentNextPointX; // next movement point in X
var currentNextPointY; // next movement point in Y
var playerAlive = true;

function Ghost(sprite){
  this.sprite = sprite;
  this.enemyDirection = "STOP";
}


function configPathFinding(){
  easyStar.setGrid(board);
  easyStar.setIterationsPerCalculation(1000);
  easyStar.setAcceptableTiles([1]);
  //easystar.enableCornerCutting();
  easyStar.enableDiagonals();
}

function placeGhost(){
  var randX;
  var randY;
  var posX = 0;
  var posY = 0;
  var posData = {
    ghostX: 0,
    ghostY: 0
  };

  while(posX === 0 && posY === 0){
    randX = Math.floor(Math.random() * gameBoard.boardWidth);
    randY = Math.floor(Math.random() * gameBoard.boardHeight);
    posX = board[randX];
    posY = board[randY];
  }

  posData.ghostX = randX;
  posData.ghostY = randY;

  return posData;
}

function createGhosts(){
  var ghostCount = Math.floor(Math.random() + 2) + 1;
  var posData;
  for (i = 0; i < ghostCount; i++ ){
    posData = placeGhost();
    var sprite = this.game.add.isoSprite(posData.ghostX * TILE_POS, posData.ghostY * TILE_POS, 0, 'scarecrow', 0, enemyGroup);
    sprite.tint = 0x000000;
    // sprite.alpha = 0.6;
    sprite.animations.add('S', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    sprite.animations.add('W', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
    sprite.animations.add('E', [16, 17, 18, 19, 20, 21, 22, 23], 10, true);
    sprite.animations.add('N', [24, 25, 26, 27, 28, 29, 30, 31], 10, true);
    sprite.animations.add('SW', [32, 33, 34, 35, 36, 37, 38, 39], 10, true);
    sprite.animations.add('NW', [40, 41, 42, 43, 44, 45, 46, 47], 10, true);
    sprite.animations.add('SE', [48, 49, 50, 51, 52, 53, 54, 55], 10, true);
    sprite.animations.add('NE', [56, 57, 58, 59, 60, 61, 62, 63], 10, true);
    this.game.physics.isoArcade.enable(sprite);

    sprite.body.collideWorldBounds = true;
    var ghost = new Ghost(sprite);
    ghosts.push(ghost);
  }
   // var ghost = this.game.add.isoSprite(350, 280, 0, 'characterAnim', 0, enemyGroup);
   // ghost.alpha = 0.6;

   //    ghost.animations.add('S', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
   //    ghost.animations.add('SW', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
   //    ghost.animations.add('W', [16, 17, 18, 19, 20, 21, 22, 23], 10, true);
   //    ghost.animations.add('NW', [24, 25, 26, 27, 28, 29, 30, 31], 10, true);
   //    ghost.animations.add('N', [32, 33, 34, 35, 36, 37, 38, 39], 10, true);
   //    ghost.animations.add('NE', [40, 41, 42, 43, 44, 45, 46, 47], 10, true);
   //    ghost.animations.add('E', [48, 49, 50, 51, 52, 53, 54, 55], 10, true);
   //    ghost.animations.add('SE', [56, 57, 58, 59, 60, 61, 62, 63], 10, true);
   //    this.game.physics.isoArcade.enable(ghost);

   //    ghost.body.collideWorldBounds = true;
   //    return ghost;
}

function enemyGroupKill(){
  enemyGroup.forEach(function (enemy) {
    enemy.kill();
  });
}

function checkGhostCollision(){
  // console.log(player);
  // console.log(ghost);
  this.game.physics.isoArcade.overlap(player, enemyGroup, function(player){
      // console.log("overlap");
      // player.moves = false;
      // playerAlive = false;
      // alert("u dead az fuckkk :(")
      enemyGroupKill();
      // zoomForDeath();
      playerPerish();
      // this.time.events.add(Phaser.Timer.SECOND * 200, this.transition, this);
      // game.state.start("GameOver");
    }, function(){
      return playerAlive;
    });
}

function setPathFinderInterval(ghost) {
  setInterval(function(){

            var currentGhostXtile = Math.floor(ghost.sprite.body.position.x / TILE_POS);
            var currentGhostYtile = Math.floor(ghost.sprite.body.position.y / TILE_POS);

            easyStar.findPath(currentGhostXtile, currentGhostYtile, currentPlayerXtile, currentPlayerYtile, function( path ) {
                if (path === null) {
                    // console.log("The path to the destination point was not found.");
                }

                if (path) {
                  currentNextPointX = path[1].x;
                    currentNextPointY = path[1].y;
                }

                if (currentNextPointX < currentGhostXtile && currentNextPointY < currentGhostYtile)
                {
                  // left up

                  // console.log("GO LEFT UP");

                  ghost.enemyDirection = "NW";
                }
                else if (currentNextPointX == currentGhostXtile && currentNextPointY < currentGhostYtile)
                {
                  // up

                  // console.log("GO UP");

                  ghost.enemyDirection = "N";


                }
                else if (currentNextPointX > currentGhostXtile && currentNextPointY < currentGhostYtile)
                {
                  // right up

                  // console.log("GO RIGHT UP");

                  ghost.enemyDirection = "NE";

                }
                else if (currentNextPointX < currentGhostXtile && currentNextPointY == currentGhostYtile)
                {
                  // left

                  // console.log("GO LEFT");

                  ghost.enemyDirection = "W";

                }
                else if (currentNextPointX > currentGhostXtile && currentNextPointY == currentGhostYtile)
                {
                  // right

                  // console.log("GO RIGHT");

                  ghost.enemyDirection = "E";

                }
                else if (currentNextPointX > currentGhostXtile && currentNextPointY > currentGhostYtile)
                {
                  // right down

                  // console.log("GO RIGHT DOWN");

                  ghost.enemyDirection = "SE";

                }
                else if (currentNextPointX == currentGhostXtile && currentNextPointY > currentGhostYtile)
                {
                  // down

                  // console.log("GO DOWN");

                  ghost.enemyDirection = "S";

                }
                else if (currentNextPointX < currentGhostXtile && currentNextPointY > currentGhostYtile)
                {
                  // left down

                  // console.log("GO LEFT DOWN");

                  ghost.enemyDirection = "SW";

                }
                else
                {

                  ghost.enemyDirection = "STOP";

                }

            });

            easyStar.calculate();

          }, timeStep - Math.floor((Math.random() + 10) + 1));
  }

function setGhostPaths(){
  for(i = 0; i < ghosts.length; i++){
    var ghost = ghosts[i];
    setPathFinderInterval(ghost);
  }
}

function moveGhost(ghost){
          currentPlayerXtile = Math.floor(player.body.position.x / TILE_POS);
          currentPlayerYtile = Math.floor(player.body.position.y / TILE_POS);


          // Move the ENEMY
          var enemySpeed = (Math.random() * 10) + 120;

          if (ghost.enemyDirection == "N") {
            ghost.sprite.body.velocity.x = -enemySpeed;
            ghost.sprite.body.velocity.y = -enemySpeed;
            ghost.sprite.animations.play('N');

          }
          else if (ghost.enemyDirection == "S")
          {
            ghost.sprite.body.velocity.x = enemySpeed;
            ghost.sprite.body.velocity.y = enemySpeed;
            ghost.sprite.animations.play('S');

          }
          else if (ghost.enemyDirection == "E") {
            ghost.sprite.body.velocity.x = enemySpeed;
            ghost.sprite.body.velocity.y = -enemySpeed;
            ghost.sprite.animations.play('E');

          }
          else if (ghost.enemyDirection == "W")
          {
            ghost.sprite.body.velocity.x = -enemySpeed;
            ghost.sprite.body.velocity.y = enemySpeed;
            ghost.sprite.animations.play('W');

          }
          else if (ghost.enemyDirection == "SE")
          {
            ghost.sprite.body.velocity.x = enemySpeed;
            ghost.sprite.body.velocity.y = 0;
            ghost.sprite.animations.play('SE');

          }
          else if (ghost.enemyDirection == "NW")
          {
            ghost.sprite.body.velocity.x = -enemySpeed;
            ghost.sprite.body.velocity.y = 0;
            ghost.sprite.animations.play('NW');

          }
          else if (ghost.enemyDirection == "SW")
          {
            ghost.sprite.body.velocity.x = 0;
            ghost.sprite.body.velocity.y = enemySpeed;
            ghost.sprite.animations.play('SW');

          }

          else if (ghost.enemyDirection == "NE")
          {
            ghost.sprite.body.velocity.x = 0;
            ghost.sprite.body.velocity.y = -enemySpeed;
            ghost.sprite.animations.play('NE');

          }
          else if (ghost.enemyDirection == "STOP")
          {
            ghost.sprite.body.velocity.x = 0;
            ghost.sprite.body.velocity.y = 0;

          }
}

function moveGhosts(){
  for(i = 0; i < ghosts.length; i++){
    ghost = ghosts[i];
    moveGhost(ghost);
  }
}
