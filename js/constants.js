var ANCHOR_SET = (.5);
var TILE_POS = 55;

var boardSides = board.length;

var yTilePosition = function(value){
  return TILE_POS * value;
};
var xTilePosition = function(value){
  return TILE_POS * value;
};

var width = window.innerWidth;
var height = window.innerHeight;

var floorGroup, activeGroup, itemGroup;
var cursorPos, cursor;
var floorTile, necklace, debugTile;
var yt, xt = 0;
