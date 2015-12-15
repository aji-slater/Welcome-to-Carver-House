var ANCHOR_SET = 0.5;
var TILE_POS = 55;
gameBoard = new GameBoard();
gameBoard.generateBoard();
var board = gameBoard.board;

var boardSides = board.length;

var isPaused = false;

var yTilePosition = function(value){
  return TILE_POS * value;
};
var xTilePosition = function(value){
  return TILE_POS * value;
};

var inventory = ["Skull", "Key", "MusicBox"];
var invcheck = "inv" + inventory[1];

var floorGroup, activeGroup, itemGroup, menuGroup, furnishGroup, exitGroup;
var cursorPos, cursor;
var floorTile, necklace, key, debugTile;
var yt, xt = 0;
