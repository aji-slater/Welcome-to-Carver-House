var ANCHOR_SET = 0.5;
var TILE_POS = 55;

var gameBoard = new GameBoard();
gameBoard.generateBoard();
var board = gameBoard.board;
var boardSides = board.length;
var player;
var ghost;

var yTilePosition = function(value){
  return TILE_POS * value;
};
var xTilePosition = function(value){
  return TILE_POS * value;
};

var inventory = [];

var floorGroup, activeGroup, itemGroup, menuGroup, furnishGroup, enemyGroup;
var cursorPos, cursor;
var floorTile, necklace, key, debugTile;
var yt, xt = 0;

