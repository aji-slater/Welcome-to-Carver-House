var easyStar = new EasyStar.js();
var timeStep = 400;
var currentPlayerXtile;
var currentPlayerYtile;
var currentNextPointX; // next movement point in X
var currentNextPointY; // next movement point in Y
var playerAlive = true;
var xEnemyChange = 0;
var yEnemyChange = 0;

function Ghost(sprite){
  this.sprite = sprite;
  this.enemyDirection = "STOP";
}


function configPathFinding(){
  easyStar.setGrid(board);
  easyStar.setIterationsPerCalculation(4000);
  easyStar.setAcceptableTiles([1]);
  // easyStar.enableCornerCutting();
  easyStar.enableDiagonals();
}

function selectGhostType(){
  var ghostType = Math.floor(Math.random() * 3);
  switch(ghostType){
    case 0:
      return "peculiar_gentleman";
    case 1:
      return "priestess";
    case 2:
      return "scarecrow";
  }
}

function createGhosts(){
  // var ghostCount = Math.floor(Math.random() * 7) + 1;
  var ghostCount = enemyNum;
  var posData;
  for (i = 0; i < ghostCount; i++ ){
  var xg, yg, sprite;
    var placed = false;
    while ( placed === false ){
      var ghostSprite = selectGhostType();
      xg = gameBoard.randomCoord();
      yg = gameBoard.randomCoord();
      if (gameBoard.checkForFloor(xg, yg)){
        sprite = this.game.add.isoSprite(xTilePosition(xg), yTilePosition(yg), 0, ghostSprite, 0, enemyGroup);
        placed = true;
      }}

    sprite.tint = 0x000000;
    sprite.alpha = 0.6;
    sprite.animations.add('SE', [0, 1, 2, 3, 4, 5, 6, 7], 20, true);
    sprite.animations.add('SW', [8, 9, 10, 11, 12, 13, 14, 15], 20, true);
    sprite.animations.add('NE', [16, 17, 18, 19, 20, 21, 22, 23], 20, true);
    sprite.animations.add('NW', [24, 25, 26, 27, 28, 29, 30, 31], 20, true);
    sprite.animations.add('S', [32, 33, 34, 35, 36, 37, 38, 39], 20, true);
    sprite.animations.add('W', [40, 41, 42, 43, 44, 45, 46, 47], 20, true);
    sprite.animations.add('E', [48, 49, 50, 51, 52, 53, 54, 55], 20, true);
    sprite.animations.add('N', [56, 57, 58, 59, 60, 61, 62, 63], 20, true);
    this.game.physics.isoArcade.enable(sprite);
    sprite.body.setSize(15,15,2);
    sprite.anchor.set(0.5);
    sprite.body.collideWorldBounds = true;
    var ghost = new Ghost(sprite);
    ghosts.push(ghost);
  }

}

function enemyGroupKill(){
  enemyGroup.forEach(function (enemy) {
    enemy.kill();
  });
}

function checkGhostCollision(){
  // p = player.sprite;
  this.game.physics.isoArcade.overlap(player.sprite, enemyGroup, function(){

      // playerAlive = false;
      enemyGroupKill();
      player.perish();
      game.time.events.add(Phaser.Timer.SECOND * 2, gameOver, this).autoDestroy = true;
    });
}

function gameOver(){
  clearInterval(intervalId);
  level = 0;
  enemySpeed = 0;
  enemyNum = 1;
  game.state.start("GameOver", true, false);
}

function ghostPathCorrection() {
  var xRemainder =  ghost.sprite.body.position.x % TILE_POS;
  var yRemainder =  ghost.sprite.body.position.y % TILE_POS;
  // var xOffset = TILE_POS - xRemainder + 1;
  // var yOffset = TILE_POS - yRemainder + 1;

  if(xRemainder >= 27.5){
    xEnemyChange = TILE_POS;
  }else{
    xEnemyChange = -TILE_POS;
  }
  if(yRemainder >= 27.5){
    yEnemyChange = TILE_POS;
  }else{
    yEnemyChange = -TILE_POS;
  }
}

function setPathFinderInterval(ghost) {
  intervalId = setInterval(function(){
            // ghostPathCorrection();
            var currentGhostXtile = Math.round((ghost.sprite.body.position.x + xEnemyChange) / TILE_POS);
            var currentGhostYtile = Math.round((ghost.sprite.body.position.y + yEnemyChange) / TILE_POS);

            easyStar.findPath(currentGhostXtile, currentGhostYtile, currentPlayerXtile, currentPlayerYtile, function( path ) {
                if (path === null) {
                }
                if (path) {
                  currentNextPointX = path[1].x;
                    currentNextPointY = path[1].y;
                }
                if (currentNextPointX < currentGhostXtile && currentNextPointY < currentGhostYtile)
                {
                  // left up
                  ghost.enemyDirection = "NW";
                }
                else if (currentNextPointX == currentGhostXtile && currentNextPointY < currentGhostYtile)
                {
                  // up
                  ghost.enemyDirection = "N";

                }
                else if (currentNextPointX > currentGhostXtile && currentNextPointY < currentGhostYtile)
                {
                  // right up
                  ghost.enemyDirection = "NE";

                }
                else if (currentNextPointX < currentGhostXtile && currentNextPointY == currentGhostYtile)
                {
                  // left
                  ghost.enemyDirection = "W";
                }
                else if (currentNextPointX > currentGhostXtile && currentNextPointY == currentGhostYtile)
                {
                  // right
                  ghost.enemyDirection = "E";
                }
                else if (currentNextPointX > currentGhostXtile && currentNextPointY > currentGhostYtile)
                {
                  // right down
                  ghost.enemyDirection = "SE";
                }
                else if (currentNextPointX == currentGhostXtile && currentNextPointY > currentGhostYtile)
                {
                  // down
                  ghost.enemyDirection = "S";
                }
                else if (currentNextPointX < currentGhostXtile && currentNextPointY > currentGhostYtile)
                {
                  // left down
                  ghost.enemyDirection = "SW";
                }
                else
                {
                  ghost.enemyDirection = "STOP";
                }
            });

            easyStar.calculate();

          }, timeStep + Math.floor((Math.random() + 60) + 1));
  }

function setGhostPaths(){
  for(i = 0; i < ghosts.length; i++){
    var ghost = ghosts[i];
    setPathFinderInterval(ghost);
  }
}

function moveGhost(ghost){
          currentPlayerXtile = Math.floor(player.sprite.body.position.x / TILE_POS);
          currentPlayerYtile = Math.floor(player.sprite.body.position.y / TILE_POS);
          console.log(ghost.enemyDirection);
          // Move the ENEMY
          if (ghost.enemyDirection == "N") {
            ghost.sprite.body.velocity.x = 0;
            ghost.sprite.body.velocity.y = -enemySpeed;
            ghost.sprite.animations.play('N');

          }
          else if (ghost.enemyDirection == "S")
          {
            ghost.sprite.body.velocity.x = 0;
            ghost.sprite.body.velocity.y = enemySpeed;
            ghost.sprite.animations.play('S');

          }
          else if (ghost.enemyDirection == "E") {
            ghost.sprite.body.velocity.x = enemySpeed;
            ghost.sprite.body.velocity.y = 0;
            ghost.sprite.animations.play('E');

          }
          else if (ghost.enemyDirection == "W")
          {
            ghost.sprite.body.velocity.x = -enemySpeed;
            ghost.sprite.body.velocity.y = 0;
            ghost.sprite.animations.play('W');

          }
          else if (ghost.enemyDirection == "SE")
          {
            ghost.sprite.body.velocity.x = enemySpeed;
            ghost.sprite.body.velocity.y = enemySpeed;
            ghost.sprite.animations.play('SE');

          }
          else if (ghost.enemyDirection == "NW")
          {
            ghost.sprite.body.velocity.x = -enemySpeed;
            ghost.sprite.body.velocity.y = -enemySpeed;
            ghost.sprite.animations.play('NW');

          }
          else if (ghost.enemyDirection == "SW")
          {
            ghost.sprite.body.velocity.x = -enemySpeed;
            ghost.sprite.body.velocity.y = enemySpeed;
            ghost.sprite.animations.play('SW');

          }

          else if (ghost.enemyDirection == "NE")
          {
            ghost.sprite.body.velocity.x = enemySpeed;
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

function moveDebug(){
  var enemyNum = 1
  console.log("player " + " x: " + player.sprite.isoX + " y: " + player.sprite.isoY + " x tile: " + Math.round(player.sprite.isoX / 55) + " y tile: " + Math.round(player.sprite.isoY /55));
  enemyGroup.forEach(function(enemy){
    console.log("num: " + enemyNum + " x: " + enemy.isoX + " y: " + enemy.isoY + " tile x pos: " + Math.round(enemy.isoX /55) + " tile y pos: " + Math.round(enemy.isoY / 55));
    enemyNum++
  });
}
