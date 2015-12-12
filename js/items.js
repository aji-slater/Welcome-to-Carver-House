
var itemCreate = function(){
  necklace = game.add.isoSprite(xTilePosition(4), yTilePosition(4), 0, 'necklace', 0, itemGroup);
  necklace.anchor.set(ANCHOR_SET);
  // necklace = game.add.isoSprite(900, 900, 0, 'necklace', 0, itemGroup);
  // var xx = 0;
  // var i = 0;
  // while ( i < 9 ){
  // necklace = game.add.isoSprite(xx, 0, 0, 'necklace', 0, debugGroup);
  // necklace.anchor.set(ANCHOR_SET);
  // i++;
  // xx += TILE_POS;
  // };
};

var debugCreate = function(){
  var xx = 0;
  var i = 0;
  while ( i < 9 ){
  debugTile = game.add.isoSprite(xx, 0, 0, 'debugTile', i, debugGroup);
  debugTile.anchor.set(ANCHOR_SET);
  i++;
  xx += TILE_POS;
  };

};
