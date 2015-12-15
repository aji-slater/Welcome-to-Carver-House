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
                wall = this.game.add.isoSprite(xTilePosition(xi), yTilePosition(yi), 0, 'wall', 0, wallGroup);
                wall.anchor.set(0.5, 0.66);
            }
        }
    }
    for (var xi = 0; xi < board[0].length; xi++){
        for (var yi = 1; yi < board.length; yi++){
            if ( board[yi][xi] === 1 && board[yi-1][xi] === 0 ){
                wall = this.game.add.isoSprite(xTilePosition(xi), yTilePosition(yi), 0, 'wall', 1, wallGroup);
                wall.anchor.set(0.5, 0.66);
            }
        }
    }
};
