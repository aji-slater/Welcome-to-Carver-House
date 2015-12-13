var generateTiles = function () {
    var tile;
    for (var xx = 0; xx < (boardSides * TILE_POS); xx += TILE_POS) {
        for (var yy = 0; yy < (boardSides * TILE_POS); yy += TILE_POS) {

            tile = game.add.isoSprite(xx, yy, 0, 'tile', 0, floorGroup);
            tile.anchor.set(0.5, 0);
        }
    }
    var i = 0
    for (xx = 0; xx < 10*TILE_POS; xx+= TILE_POS){
        debugTile = game.add.isoSprite(xx, 0, 0, 'debugTile', i, floorGroup);
        debugTile.anchor.set(0.5, 0)
        i++;
    }
    var i = 0
    for (yy = 0; yy < 10*TILE_POS; yy+= TILE_POS){
        debugTile = game.add.isoSprite(0, yy, 0, 'debugTile', i, floorGroup);
        debugTile.anchor.set(0.5, 0)
        i++;
    }
}
