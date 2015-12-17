
function generateExit(){
    var northSpots = [];
    var westSpots = [];
    for (var yi = 0; yi < board.length; yi++){
        for (var xi = 0; xi < board[0].length; xi++){
            //if the position is walkable
            if(board[yi][xi] == 1){
                //if the tile to the north is either the board edge or nonwalkable
                if(board[yi-1] === undefined || board[yi-1][xi] === 0){
                    northSpots.push({x: xi, y: yi});

                }
                // if the position the tile to the west is the board edge or a west wall
                else if(board[yi][xi -1] === undefined || board[yi][xi -1] == 0){
                    westSpots.push({x: xi, y: yi});
                }
            }
        }
    }

    var randIndex;
    var x;
    var y;
    if(Math.floor((Math.random() * 2)) == 0){
        randIndex = Math.floor((Math.random() * northSpots.length - 1));
        x = northSpots[randIndex].x * TILE_POS;
        y = northSpots[randIndex].y * TILE_POS;
        exit = this.game.add.isoSprite(x - (TILE_POS * 2) - 26, y - (TILE_POS ) + 2, 15, 'exit-north', 15, exitGroup);
        this.game.physics.isoArcade.enable(this.exit);
        exit.body.setSize(65, 75, 100, 75, 75);
        console.log(x - (TILE_POS * 2) - 26);
        console.log( y - (TILE_POS) - 22);
    }
    else{
        randIndex = Math.floor((Math.random() * westSpots.length - 1));
        x = westSpots[randIndex].x * TILE_POS;
        y = westSpots[randIndex].y * TILE_POS;
        exit = this.game.add.isoSprite(x - (TILE_POS * 2) - 12, y - (TILE_POS) - 11, 15, 'exit-west', 15, exitGroup);
        this.game.physics.isoArcade.enable(this.exit);
        exit.body.setSize(80, 80, 100, 45, 85);
        console.log(x - (TILE_POS * 2) - 30);
        console.log(y - (TILE_POS) - 18);
    }
    exit.tint = 0x000000;
    exit.body.collideWorldBounds = true;
    exit.body.immovable = true;
    exit.body.moves = false;

}

var generateTiles = function (){
    var woodFloorTile;
    var emptyFloorTile;
    var xx = 0;
    var yy = 0;
    for (var yi = 0; yi < board.length; yi++){
        for (var xi = 0; xi < board[0].length; xi++){
            if ( board[yi][xi] === 1 ){
                woodFloorTile = this.game.add.isoSprite(xx, yy, 0, 'woodTile', 0, floorGroup);
                woodFloorTile.anchor.set(0.5, 0);
            } else {
                emptyTile = this.game.add.isoSprite(xx, yy, 0, 'emptySquare', 0, emptyGroup);
                emptyTile.anchor.set(0.5, 0);
                game.physics.isoArcade.enable(emptyTile);
                emptyTile.body.collideWorldBounds = true;
                emptyTile.body.moves = false;
                emptyTile.body.setSize(56, 56, 5);
            }
            xx += TILE_POS;
        }
        xx = 0;
        yy += TILE_POS;
    }

};

var generateWalls = function(){
  for (var yi = 0; yi < board.length; yi++){
    for (var xi = 0; xi < board[0].length; xi++){
      if ( board[yi][xi] === 1 && board[yi][xi-1] === 0 ){
        wall = this.game.add.isoSprite(xTilePosition(xi), yTilePosition(yi), 0, 'westWall', decorateWalls(), wallGroup);
        wall.anchor.set(0.5, 0.66);
        wall.tint = 0x000000;
      }
    }
  }
  for (var xi = 0; xi < board[0].length; xi++){
    for (var yi = 1; yi < board.length; yi++){
      if ( board[yi][xi] === 1 && board[yi-1][xi] === 0 ){
        wall = this.game.add.isoSprite(xTilePosition(xi), yTilePosition(yi), 0, 'northWall', 1, wallGroup);
        wall.anchor.set(0.5, 0.66);
        wall.tint = 0x000000;
      }
    }
  }
};

var wallCheck = function(){
  wallGroup.forEach(function (wall){
    if ( wall.isoX >= player.isoX && wall.isoY >= player.isoY ) {
      wall.alpha = 0.3;
    } else {
      wall.alpha = 1;
    }
  });
};

function decorateWalls(){
  var wallProbability = Math.random();
  if (wallProbability < 0.1) {
    wallProbability = Math.random();
      if (wallProbability < 0.5) {
        return 1;
      } else {
        return 2;
      }
  }
  return  0;
}
