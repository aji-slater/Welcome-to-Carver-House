var ANCHOR_SET = 0.5;
var TILE_POS = 55;

var gameBoard = new GameBoard();
gameBoard.generateBoard(40, 40);
var board = gameBoard.board;
var boardSides = board.length;

itemController = new ItemController();

var player, exit;
var ghosts = [];
var unlocked = false;
var easyStar = new EasyStar.js();
var timeStep = 400;
var isPaused = false;


var yTilePosition = function(value){
  return TILE_POS * value;
};
var xTilePosition = function(value){
  return TILE_POS * value;
};

var inventory = [];

var floorGroup, activeGroup, itemGroup, menuGroup, furnishGroup, enemyGroup, exitGroup, wallGroup;

var cursorPos, cursor;
var floorTile, necklace, key, debugTile;
var yt, xt = 0;
