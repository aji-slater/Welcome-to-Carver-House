
function Room(x, y, w, h){
      //top left
      this.x = x;
      this.y = y;
      this.x2 = x + w;
      this.y2 = y + h;
      this.height = h;
      this.width = w;
      this.items = {};
      this.ghostCount = 0;
}

Room.prototype.area = function(){
  return this.height * this.width;
};

Room.prototype.centerX = function(){
      return Math.floor(this.x +(this.width/2));
};

Room.prototype.centerY = function(){
      return Math.floor(this.y +(this.height/2));
};

Room.prototype.intersects = function(room2){
      return (this.x <= room2.x2 && this.x2 >= room2.x && this.y <= room2.y2 && this.y2 >= room2.y);
};


function GameBoard(){
  this.board = [];
  this.roomCount = 0;
  this.boardHeight;
  this.boardWidth;
  this.entryRoom = new Room();
  this.entryRoom.x = 0;
  this.entryRoom.y = 0;
  this.entryRoom.height = 2;
  this.entryRoom.width = 2;
}

GameBoard.prototype.maxArea = function(){
  var roomAreas = [];
  for ( i = gameBoard.rooms.length - 1; i >= 0; i-- ){
    currentRoom = gameBoard.rooms[i];
    roomAreas.push(currentRoom.area());
  }
  var currentMax = 0;
  for ( i = roomAreas.length - 1; i >= 0; i -- ){
    if ( roomAreas[i] > currentMax ){
      currentMax = roomAreas[i];
    }
  }
  return currentMax;
};

GameBoard.prototype.minArea = function(){
  var roomAreas = [];
  for ( i = gameBoard.rooms.length - 1; i >= 0; i-- ){
    currentRoom = gameBoard.rooms[i];
    roomAreas.push(currentRoom.area());
  }
  var currentMin = 500;
  for ( i = roomAreas.length - 1; i >= 0; i -- ){
    if ( roomAreas[i] < currentMin ){
      currentMin = roomAreas[i];
    }
  }
  return currentMin;
};

GameBoard.prototype.avgArea = function(){
  var roomAreas = [];
  for ( i = gameBoard.rooms.length - 1; i >= 0; i-- ){
    currentRoom = gameBoard.rooms[i];
    roomAreas.push(currentRoom.area());
  }
  var sum = 0;
  for ( i = roomAreas.length - 1; i >= 0; i-- ){
    sum += roomAreas[i];
  }
  return Math.floor(sum/roomAreas.length);
};

GameBoard.prototype.checkForFloor = function(x, y){
  if (this.board[y][x] === 1){
    return true;
  } else {
    return false;
  }
};

GameBoard.prototype.randomCoord = function(){
  return Math.floor(Math.random()*board.length);
};


//pick point on the board corresponding to the top left corner of room, build room from that origin column by column until the room width is reached, or the edge of the map.
GameBoard.prototype.generateRoom = function(room){

      for(var x = room.x; x < (room.x + room.width) && (x <= this.board.length - 1); x++){
            for(var y = room.y; y < (room.y + room.height) && y <= (this.board[0].length -1); y++){
                  this.board[y][x] = 1;
            }
      }
      console.log(this.board);
};

GameBoard.prototype.generateEmptyBoard = function(width, height){
            for(var y = height; y >= 1 ; --y){
            var row = [];
            for(var x = width; x >= 1; --x){
                 row.push(0);
            }
            this.board.push(row);
      }
      this.boardWidth = width;
      this.boardHeight = height;
      return this.board;
}


GameBoard.prototype.generateBoard = function(width, height){
this.generateEmptyBoard(width, height);
  this.rooms = [];
  maxrooms = 100;
  for (var r = 0 ; r < maxrooms; r++){
      var w = Math.floor(Math.random() * 16) + 4;
      var h = Math.floor(Math.random() * 16) + 4;
      var x = Math.floor(Math.random() * this.boardWidth - w) + 1;
      if(x < 0){
            x = x + w;
      }
      var y = Math.floor(Math.random() * this.boardHeight - h) + 1;
      if(y < 0){
                  y = y + h;
      }

      var newRoom = new Room(x, y, w, h);
      var intersect = false;
      for(roomIndex in this.rooms){
            if(newRoom.intersects(this.rooms[roomIndex])){
                  intersect = true;
                  break;
            }
      }
      if(!intersect){
            var z = 0;
            this.generateRoom(newRoom);
            if(this.rooms.length > 0){
                  var oldRoom = this.rooms[this.rooms.length -1];
                  if ( newRoom.centerX() >= oldRoom.centerX() ){
                        z = -1;
                  } else {
                        z = 1;
                  }
                  xx = newRoom.centerX();
                        //moves left and right (east west)
                    while(xx != oldRoom.centerX()){
                        this.board[newRoom.centerY() + z][xx] = 1;
                        this.board[newRoom.centerY()][xx] = 1;
                        xx += z;
                  }

                  if ( newRoom.centerY() >= oldRoom.centerY() ){
                        z = -1;
                  } else {
                        z = 1;
                  }
                  yy = newRoom.centerY();
                  // moves up down (north south)
                  while(yy != oldRoom.centerY()){
                        this.board[yy][oldRoom.centerX() + z] = 1;
                        this.board[yy][oldRoom.centerX()] = 1;
                        yy += z;
                  }

            }
            this.rooms.push(newRoom);
      }
 }
};


// var board = [[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
//              [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
//              [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
//              [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
//              [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
//              [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
//              [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
//              [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
//              [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
//              [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0]];
