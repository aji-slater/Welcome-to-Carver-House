

function Room(){
      this.x;
      this.y;
      this.height;
      this.width;
      this.eastHallway;
      this.westHallway;
      this.northHallway;
      this.southHallway;
      this.items = {};
      this.ghostCount = 0;
}


function GameBoard(){
      this.board = [];
      this.roomMap = new Room;
}

// Room.prototype.getRoomCenter = function(){
//       var x = Math.floor(this.width/2);
//       var y = Math.floor(this.height/2);
//       return {x: x, y: y};
// }

// Room.prototype.getRoomOrigin = function(){
//       this.
// }

//pick point on the board corresponding to the top left corner of room, build room from that origin column by column until the room width is reached, or the edge of the map.
GameBoard.prototype.generateRoom =function(room){

      for(var x = room.x; x < (room.x + room.width) && (x <= this.board.length - 1); x++){
            for(var y = room.y; y < (room.y + room.height) && y <= (this.board[0].length -1); y++){
                  this.board[y][x] = 1;
            }
      }
}

GameBoard.prototype.generateEmptyBoard = function(width, height){
      var board;
            for(var x = width; x >= 1 ; --x){
            var row = [];
            for(var y = height; y >= 1; --y){
                 row.push(0);
            }
            this.board.push(row);
      }
      return this.board;
}

//testing room build function
GameBoard.prototype.generateBoard = function(){
      this.generateEmptyBoard(40, 40);
      var room = new Room();
      room.height = 8;
      room.width = 6;
      room.x = 20;
      room.y = 20;
      this.generateRoom(room);
      return this.board;
}

// GameBoard.prototype.generateRooms = function(){
//       this.board = this.generateEmptyBoard();
//       var roomCount = 0;
//       var board = [];
//       var offset;
//       var boxWidth;
//       var boxHeight;
//       var currentCell;
//                   //create room
//                   room = new Room();
//                   room.id = ++roomCount;
//                   //pick a width and height between 8 and 18
//                   room.width = Math.floor(Math.random() * 10) + 8
//                   room.height = Math.floor(Math.random() * 10) + 8
//                   //pick random offset value between 20 and 50
//                   offset = Math.floor(Math.random() 20 * 50) + 20;

//                  // select offset diretion randomly from 1 - 3
//                  var offsetDirection = (Math.random() *3) + 1;

//                  if(offset === 1){
//                   //offset west(left)
//                   currentCell =

//                  }
//                  else if(offset === 2){
//                   //offset south(down)
//                  }
//                  else{
//                   //ofset east(right)
//                  }
//                  // row.push(tileNum);
//             }
//             board.push(row);
//       }
//       return board;
// }

// GameBoard.prototype.generateRandomBoard = function(){
//       var board = [];
//       var offset;
//       var boxWidth;
//       var boxHeight;
//       for(var x = 101; x >= 1 ; --x){
//             var row = [];
//             for(var y = 101; y >= 1; --y){
//                  var tileNum = Math.floor(Math.random() * 2);
//                  row.push(tileNum);
//             }
//             board.push(row);
//       }
//       return board;
// }
var board = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0],
             [0,0,0,1,1,0,0,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,2,3,3,0,0,0,0,0,0],
             [0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,1,1,0,0,1,1,2,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
