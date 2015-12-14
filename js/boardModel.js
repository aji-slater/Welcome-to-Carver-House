


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

Room.prototype.centerX = function(){
      return Math.floor(this.x +(this.width/2));
};

Room.prototype.centerY = function(){
      return Math.floor(this.y +(this.height/2));
};

Room.prototype.intersects = function(room2){
      // return (room2.x >= this.x && room2.x <= this.x2 && room2.y2 >= this.y && room2.y >= this.y);
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
};

// GameBoard.prototype.generateHorizontal = function(room1, room2, hallV){
//       console.log(room1);
//       console.log(room2);


//       var hallX = new Room();
//       hallX.height = 2;
//       var hallwayData = {"hallX": hallX, "partner_room": null};
//       if(hallV === false){
//             var hallwayWidth = Math.abs(room1.centerX() - room2.centerX());
//             hallX.width = hallwayWidth;
//              // if room2 is east of room1
//             if(room2.x > room1.x){
//                   hallX.x = room1.centerX();
//                   hallX.y = room1.centerY();
//                   this.generateRoom(hallX);
//                   hallwayData["hallX"] = hallX;
//                   hallwayData["partner_room"] = room2;
//                   return hallwayData;
//             }
//             // if room2 is west of room1
//             else if(room2.x < room1.x){
//                   hallX.x = room2.centerX();
//                   hallX.y = room2.centerY();
//                   this.generateRoom(hallX);
//                   hallwayData["hallX"] = hallX;
//                   hallwayData["partner_room"] = room1;
//                   return hallwayData;
//             }
//       }
//       else {
//             var hallwayWidth = Math.abs(room2.centerX() - hallV.x);
//             this.generateRoom(hallV.x, hallV.y, 2, hallwayWidth);
//       }
// }

// GameBoard.prototype.generateVertical = function(room1, room2, hallH){

//       var hallY = new Room();
//       hallY.width = 2;
//       var hallwayData = {"hallY": hallY, "partner_room": null};
//       if(hallH === false){

//             var hallwayHeight = Math.abs(room1.centerY() - room2.centerY());
//             hallY.height = hallwayHeight;

//             // if room2 is south of room1
//             if (room2.y > room1.y) {

//                   hallY.x = room1.centerX();
//                   hallY.y = room1.centerY();
//                   this.generateRoom(hallY);
//                   hallwayData["hallY"] = hallY;
//                   hallwayData["partner_room"] = room2;
//                   return hallwayData;
//             }
//             // if room2 is north of room1
//             else if(room2.y < room1.y){

//                   hallY.y = room2.centerY();
//                   hallY.x = room2.centerX();
//                   this.generateRoom(hallY);
//                   hallwayData["hallY"] = hallY;
//                   hallwayData["partner_room"] = room1;
//                   return hallwayData;
//             }
//       }
//       else{
//             var hallwayHeight = Math.abs(room2.centerY() - hallH.y);
//             this.generateRoom(hallH.x, hallH.y, hallwayHeight, 2);
//       }
// }


// GameBoard.prototype.generateHallway = function(room1, room2){
//       console.log(room1);
//       console.log(room2);
      // var room1CenterX = Math.floor(room1.width/2 + room1.x);
      // var room1CenterY = Math.floor(room1.height/2 + room1.y);

      // var room2CenterX = Math.floor(room2.width/2 + room2.x);
      // var room2CenterY = Math.floor(room2.height/2 + room2.y);

      // var hallwayHeight = Math.abs(room1.CenterY - room2.CenterY);
      // var hallwayWidth = Math.abs(room1.CenterX - room2.CenterX);

      // var hallX = new Room();
      // hallX.height = 2;
      // hallX.width = hallwayWidth;

      // var hallY = new Room();
      // hallY.width = 2;
      // hallY.height = hallwayHeight;

      // // if room2 is east of room1
      // if(room2.x > room1.x){
      //       hallX.x = room1.CenterX
      //       hallX.y = room1.CenterY;
      //       // hallY.x = hallX.x + hallX.width -2;
      //       // hallY.y = hallX.y;
      //       this.generateRoom(hallX);
      //       return hallX;
      // }

      // if room2 is west of room1
      // else if(room2.x < room1.x){
      //       hallX.x = room2.CenterX
      //       hallX.y = room2.CenterY;
      //       // hallY.x = hallX.x - hallX.width -2;
      //       // hallY.y = hallX.y;
      //       this.generateRoom(hallX);
      //       return hallX;
      // }
      // if room2 is south of room1
//       if (room2.y > room1.y) {
//             // hallX.x = room1CenterX;
//             // hallX.y = room1CenterY;
//             hallY.x = room1.CenterX
//             hallY.y = room1.CenterY;
//             this.generateRoom(hallY);
//             return hallY;
//       }
//       // if room2 is north of room1
//       else if(room2.y < room1.y){
//             // hallX.x = room2CenterX;
//             // hallX.y = room2CenterY;
//             hallY.y = room2.CenterY;
//             hallY.x = room2.CenterX;
//             this.generateRoom(hallY);
//             return hallY;
//       }
// }

GameBoard.prototype.generateBoard = function(){
this.generateEmptyBoard(50, 50);
 var rooms = [];
 maxrooms = 200;
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
      for(var roomIndex in rooms){
            if(newRoom.intersects(rooms[roomIndex])){
                  intersect = true;
                  break;
            }
      }
      if(!intersect){
            var z = 0;
            this.generateRoom(newRoom);
            if(rooms.length > 0){
                  var oldRoom = rooms[rooms.length -1];
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
      }
 }};
