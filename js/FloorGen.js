
function generateExit(){
    // var x;
    // var y;
    // randX = Math.floor(Math.random() * gameBoard.boardWidth);
    // randY = Math.floor(Math.random() * gameBoard.boardHeight);
    var westCheck = false;
    var eastCheck = false;
    var northCheck = false;
    var southCheck = false;
    var northSpots = [];
    var westSpots = [];
    for (var yi = 0; yi < board.length; yi++){
        for (var xi = 0; xi < board[0].length; xi++){
            //if the position is walkable
            if(board[yi][xi] == 1){
                //if the tile to the north is either the board edge or nonwalkable
                if(board[yi-1] === undefined || board[yi-1][xi] === 0){
                    northSpots.push({x: xi, y: yi});
                //     //check spaces up to 5 to the west
                //     for(var z = xi - 1; (xi - z) == 2; z--){
                //         if(board[yi][z] == 1){
                //             westCheck = true;
                //         }
                //         else{
                //             westCheck = false;
                //             break;
                //         }
                //     }
                //     //check spaces up to 5 to the east
                //     if(westCheck == true){
                //         for(var z = xi + 1; (z - xi) == 2; z++){
                //             if(board[yi][z] == 1){
                //                 eastCheck = true;
                //             }
                //             else{
                //                 eastCheck = false;
                //                 break;
                //             }
                //         }
                //          //check spaces up to 5 to the south
                //          if(eastCheck == true){
                //             for(var z = yi + 1; (z - yi) == 2; z++){
                //                 if(board[z][xi] == 1){
                //                     southCheck = true;
                //                 }
                //                 else{
                //                     southCheck = false;
                //                     break;
                //                 }
                //             }
                //             //if westCheck, eastCheck, and southCheck
                //             if(southCheck == true){
                //                 northSpots.push({x: xi, y: yi});
                //             }
                //         }
                //     }
                // }
                }
                // if the position the tile to the west is the board edge or a west wall
                else if(board[yi][xi -1] === undefined || board[yi][xi -1] == 0){
                    westSpots.push({x: xi, y: yi});
                    //check spaces up to 3 to the east
        //             for(var z = xi + 1; (z - xi) == 2; z++){
        //                 if(board[yi][z] == 1){
        //                     eastCheck = true;
        //                 }
        //                 else{
        //                     eastCheck = false;
        //                     break;
        //                 }
        //             }
        //             //check spaces up to 3 to the north
        //             if(eastCheck == true){
        //                 for(var z = xi + 1; (z - xi) == 2; z++){
        //                     if(board[yi][z] == 1){
        //                         northCheck = true;
        //                     }
        //                     else{
        //                         northCheck = false;
        //                         break;
        //                     }
        //                 }
        //                  //check spaces up to 3 to the south
        //                  if(northCheck == true){
        //                     for(var z = yi - 1; (yi - z) == 2; z--){
        //                         if(board[z][xi] == 1){
        //                             southCheck = true;
        //                         }
        //                         else{
        //                             southCheck = false;
        //                             break;
        //                         }
        //                     }
        //                     //if westCheck, eastCheck, and northCheck
        //                     if(southCheck == true){
        //                         westSpots.push({x: xi, y: yi});
        //                     }
        //                 }
        //             }
                }
            }
        //     northCheck = false;
        //     eastCheck = false;
        //     southCheck = false;
        //     westCheck = false;

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

    exit.body.collideWorldBounds = true;
    exit.body.immovable = true;
    exit.body.moves = false;
    // exit.offsetX = -4 * TILE_POS;
    // exit.offsetY = -4 * TILE_POS;
    // emp.body.setSize(56, 56, 5);
    // this.game.physics.isoArcade.collide(player, exitGroup, function(player){
    //    console.log("collides!");
    // });


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
        // Debug Tiles at 0x0
    // var i = 0
    // for (xx = 0; xx < 9*TILE_POS; xx+= TILE_POS){
    //     debugTile = this.game.add.isoSprite(xx, 0, 0, 'debugTile', i, floorGroup);
    //     debugTile.anchor.set(0.5, 0)
    //     i++;
    // }

    // var i = 0
    // for (yy = 0; yy < 9*TILE_POS; yy+= TILE_POS){
    //     debugTile = this.game.add.isoSprite(0, yy, 0, 'debugTile', i, floorGroup);
    //     debugTile.anchor.set(0.5, 0)
    //     i++;
    // }
};

var generateWalls = function(){
    for (var yi = 0; yi < board.length; yi++){
        for (var xi = 0; xi < board[0].length; xi++){
            if ( board[yi][xi] === 1 && board[yi][xi-1] === 0 ){
                wall = this.game.add.isoSprite(xTilePosition(xi), yTilePosition(yi), 0, 'wall', 0, floorGroup);
                wall.anchor.set(0.5, 0.66);
            }
        }
    }
    for (var xi = 0; xi < board[0].length; xi++){
        for (var yi = 1; yi < board.length; yi++){
            if ( board[yi][xi] === 1 && board[yi-1][xi] === 0 ){
                wall = this.game.add.isoSprite(xTilePosition(xi), yTilePosition(yi), 0, 'wall', 1, floorGroup);
                wall.anchor.set(0.5, 0.66);
            }
        }
    }
}
