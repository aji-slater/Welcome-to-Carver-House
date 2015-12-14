
var easyStar = new EasyStar.js();
var timeStep = 400;
var currentPlayerXtile;
var currentPlayerYtile;
var currentGhostXtile;
var currentGhostYtile;
var currentNextPointX; // next movement point in X
var currentNextPointY; // next movement point in Y
var enemyDirection = "STOP";

function parishHandler(player, ghost){
  console.log("overlapped!!!!");
}

function configPathFinding(){
  easyStar.setGrid(board);
  easyStar.setIterationsPerCalculation(1000);
  easyStar.setAcceptableTiles([1]);
  //easystar.enableCornerCutting();
  easyStar.enableDiagonals();
}

function createGhost(){
   var ghost = this.game.add.isoSprite(350, 280, 0, 'characterAnim', 0, enemyGroup);
   ghost.alpha = 0.6;

      ghost.animations.add('S', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
      ghost.animations.add('SW', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
      ghost.animations.add('W', [16, 17, 18, 19, 20, 21, 22, 23], 10, true);
      ghost.animations.add('NW', [24, 25, 26, 27, 28, 29, 30, 31], 10, true);
      ghost.animations.add('N', [32, 33, 34, 35, 36, 37, 38, 39], 10, true);
      ghost.animations.add('NE', [40, 41, 42, 43, 44, 45, 46, 47], 10, true);
      ghost.animations.add('E', [48, 49, 50, 51, 52, 53, 54, 55], 10, true);
      ghost.animations.add('SE', [56, 57, 58, 59, 60, 61, 62, 63], 10, true);
      this.game.physics.isoArcade.enable(ghost);

      ghost.body.collideWorldBounds = true;
      return ghost;
}

function checkGhostCollision(){
  // console.log(player);
  // console.log(ghost);
  this.game.physics.isoArcade.overlap(player, ghost, function(player){
      console.log("overlap");
      player.kill();
    });
}

function setPathFinderInterval() {
  setInterval(function(){

            easyStar.findPath(currentGhostXtile, currentGhostYtile, currentPlayerXtile, currentPlayerYtile, function( path ) {
                if (path === null) {
                    console.log("The path to the destination point was not found.");
                }

                if (path) {
                  currentNextPointX = path[1].x;
                    currentNextPointY = path[1].y;
                }

                if (currentNextPointX < currentGhostXtile && currentNextPointY < currentGhostYtile)
                {
                  // left up

                  console.log("GO LEFT UP");

                  enemyDirection = "NW";
                }
                else if (currentNextPointX == currentGhostXtile && currentNextPointY < currentGhostYtile)
                {
                  // up

                  console.log("GO UP");

                  enemyDirection = "N";

                }
                else if (currentNextPointX > currentGhostXtile && currentNextPointY < currentGhostYtile)
                {
                  // right up

                  console.log("GO RIGHT UP");

                  enemyDirection = "NE";

                }
                else if (currentNextPointX < currentGhostXtile && currentNextPointY == currentGhostYtile)
                {
                  // left

                  console.log("GO LEFT");

                  enemyDirection = "W";

                }
                else if (currentNextPointX > currentGhostXtile && currentNextPointY == currentGhostYtile)
                {
                  // right

                  console.log("GO RIGHT");

                  enemyDirection = "E";

                }
                else if (currentNextPointX > currentGhostXtile && currentNextPointY > currentGhostYtile)
                {
                  // right down

                  console.log("GO RIGHT DOWN");

                  enemyDirection = "SE";

                }
                else if (currentNextPointX == currentGhostXtile && currentNextPointY > currentGhostYtile)
                {
                  // down

                  console.log("GO DOWN");

                  enemyDirection = "S";

                }
                else if (currentNextPointX < currentGhostXtile && currentNextPointY > currentGhostYtile)
                {
                  // left down

                  console.log("GO LEFT DOWN");

                  enemyDirection = "SW";

                }
                else
                {

                  enemyDirection = "STOP";

                }

                // if (enemyDirection != "STOP") cowboy.animations.play(enemyDirection);

            });

            easyStar.calculate();

          }, timeStep);
  };

function moveGhost(ghost){
          currentPlayerXtile = Math.floor(player.body.position.x / TILE_POS);
          currentPlayerYtile = Math.floor(player.body.position.y / TILE_POS);
          currentGhostXtile = Math.floor(ghost.body.position.x / TILE_POS);
          currentGhostYtile = Math.floor(ghost.body.position.y / TILE_POS);

          // Move the ENEMY
          var enemySpeed = 90;

          if (enemyDirection == "N") {
            ghost.body.velocity.x = -enemySpeed;
            ghost.body.velocity.y = -enemySpeed;
          }
          else if (enemyDirection == "S")
          {
            ghost.body.velocity.x = enemySpeed;
            ghost.body.velocity.y = enemySpeed;
          }
          else if (enemyDirection == "E") {
            ghost.body.velocity.x = enemySpeed;
            ghost.body.velocity.y = -enemySpeed;
          }
          else if (enemyDirection == "W")
          {
            ghost.body.velocity.x = -enemySpeed;
            ghost.body.velocity.y = enemySpeed;
          }
          else if (enemyDirection == "SE")
          {
            ghost.body.velocity.x = enemySpeed;
            ghost.body.velocity.y = 0;
          }
          else if (enemyDirection == "NW")
          {
            ghost.body.velocity.x = -enemySpeed;
            ghost.body.velocity.y = 0;
          }
          else if (enemyDirection == "SW")
          {
            ghost.body.velocity.x = 0;
            ghost.body.velocity.y = enemySpeed;
          }

          else if (enemyDirection == "NE")
          {
            ghost.body.velocity.x = 0;
            ghost.body.velocity.y = -enemySpeed;
          }
          else if (enemyDirection == "STOP")
          {
            ghost.body.velocity.x = 0;
            ghost.body.velocity.y = 0;
          }
}

