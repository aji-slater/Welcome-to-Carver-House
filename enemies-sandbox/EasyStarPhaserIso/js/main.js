var width = window.innerWidth;
var height = window.innerHeight;

var obstacleGroup, player, cowboy;
var marker, marker2, marker3, marker4, marker5, itemGroup;
var floorGroup;
var exitMarker;

var grassGroup;

var itemsTxt, endTxt;
var txt = "";
var finalTxt = "";

var currentItemCount = 0; // starting number of collected items
var totalItemCount = 4; // total number of items to be collected

var check;

var controls;
var cN, cS, cE, cW, cSE, cNE, cSW, cNW;

var Ndown = false, Sdown = false, Edown = false, Wdown = false, SEdown = false, NEdown = false, SWdown = false, NWdown = false;


// ********************* EasyStar setup *********************

var easystar = new EasyStar.js();
var timeStep = 400; // pathway computation time interval in milliseconds

// 0 - empty space
// 1 - cactus 1
// 2 - cactus 2
// 3 - rock
// 4 - gun
// 5 - gold
// 6 - star
// 7 - skull
// 9 - mine - consists of 6 tiles (3x2)

// 8 - player start point

var level = [[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
             [0,1,0,4,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,2,0,0,1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,9,9,9,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,9,9,0,0,0,0],
             [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,3,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0],
             [0,0,2,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,1,0,0,3,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,1,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,1,0,0,2,0,0,7,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0],
             [0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]];

easystar.setGrid(level);

easystar.setIterationsPerCalculation(1000); 

easystar.setAcceptableTiles([0]);
//easystar.enableCornerCutting();
easystar.enableDiagonals();


// ************ SEEKING **************

var currentPlayerXtile;
var currentPlayerYtile;

var currentCowboyXtile;
var currentCowboyYtile;

var currentNextPointX; // next movement point in X
var currentNextPointY; // next movement point in Y

var enemyDirection = "STOP";

//************* TILES ***************

var tileSize = 35;
var mapSize = 30;

// **********************************


//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");
	
	var game = new Phaser.Game(width, height, Phaser.AUTO, 'test', null, false, true);
		
	var BasicGame = function (game) { };
	
	BasicGame.Boot = function (game) { };

	BasicGame.Boot.prototype =
	{
	    preload: function () {
	        game.load.image('cactus1', 'images/tiles/obstacle1.png');
	        game.load.image('cactus2', 'images/tiles/obstacle2.png');
	        game.load.image('rock', 'images/tiles/obstacle3.png');

	        game.load.image('gold', 'images/tiles/find1_gold.png');
	        game.load.image('revolver', 'images/tiles/find2_revolver.png');
	        game.load.image('badge', 'images/tiles/find3_badge.png');
	        game.load.image('skull', 'images/tiles/find4_skull.png');
	        
	        game.load.image('exit', 'images/tiles/exit.png');
	        game.load.image('tile', 'images/tiles/ground_tile.png');

	        game.load.image('grass1', 'images/tiles/ground_tile_grass1.png');
	        game.load.image('grass2', 'images/tiles/ground_tile_grass2.png');
	        game.load.image('grass3', 'images/tiles/ground_tile_grass3.png');
	        
	        game.load.image('mine', 'images/tiles/mine.png');
	        
	        game.load.image('E', 'images/controls/E.png');
	        game.load.image('N', 'images/controls/N.png');
	        game.load.image('NE', 'images/controls/NE.png');
	        game.load.image('NW', 'images/controls/NW.png');
	        game.load.image('S', 'images/controls/S.png');
	        game.load.image('SE', 'images/controls/SE.png');
	        game.load.image('SW', 'images/controls/SW.png');
	        game.load.image('W', 'images/controls/W.png');
	        
	        game.load.spritesheet('characterAnim','images/tiles/characterAnim.png', 70, 74);
	        game.load.spritesheet('cowboy','images/enemy1.png', 70, 74);
	     
	        game.time.advancedTiming = true;

	        // Add the Isometric plug-in to Phaser
	        game.plugins.add(new Phaser.Plugin.Isometric(game));

	        // Set the world size
	        game.world.setBounds(0, 0, 2048, 1024);

	        // Start the physical system
	        game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);

	        // set the middle of the world in the middle of the screen
	        game.iso.anchor.setTo(0.5, 0);
	    },
	    create: function () {
	        
	    	// set the Background color of our game
	    	game.stage.backgroundColor = "0xde6712";
	    	
	    	// create groups for different tiles
	    	floorGroup = game.add.group();
	    	itemGroup = game.add.group();
	    	grassGroup = game.add.group();
	        obstacleGroup = game.add.group();
	      
	        // set the gravity in our game
	        game.physics.isoArcade.gravity.setTo(0, 0, -500);
    
	        var floorTile;
	        for (var xt = 0; xt < mapSize * tileSize; xt += tileSize) {
	            for (var yt = 0; yt < mapSize * tileSize; yt += tileSize) {
	            	floorTile = game.add.isoSprite(xt, yt, 0, 'tile', 0, floorGroup);
	            	floorTile.anchor.set(0.5);
	            }
	        }  
	        
	        // create the grass tiles randomly
	        var grassTile;
	        for (var xt = 0; xt < mapSize * tileSize; xt += tileSize) {
	            for (var yt = 0; yt < mapSize * tileSize; yt += tileSize) {
	            	
	            	var rnd = rndNum(20);
	            	
	            	if (rnd == 0) {
	            		grassTile = game.add.isoSprite(xt, yt, 0, 'grass1', 0, grassGroup);
	            		grassTile.anchor.set(0.5);
	            	}
	            	else if (rnd == 1)
	            	{
	            		grassTile = game.add.isoSprite(xt, yt, 0, 'grass2', 0, grassGroup);
	            		grassTile.anchor.set(0.5);
	            	}
	            	else if (rnd == 2)
	            	{
	            		grassTile = game.add.isoSprite(xt, yt, 0, 'grass3', 0, grassGroup);
	            		grassTile.anchor.set(0.5);
	            	}
	            	
	            }
	        }
	        
	        var cactus1;
	        var rock;
	   
	        for (var yt = 0; yt < level.length; yt++) {
	        	
	        	var tile = level[yt];
	        	
	        	for (var xt = 0; xt < level[yt].length; xt++) {
   
	        	//	console.log("tile[" + yt + "][" + xt + "] = " + tile[xt]);
	        		
	        		
	        		if (tile[xt] == 1) {
	        			cactus1 = game.add.isoSprite(xt * tileSize, yt * tileSize, 0, 'cactus1', 0, obstacleGroup);
	        		}
	        		else if (tile[xt] == 2) {
	        			cactus1 = game.add.isoSprite(xt * tileSize, yt * tileSize, 0, 'cactus2', 0, obstacleGroup);
	        		}
	        		else if (tile[xt] == 3) {
		            	
		            	rock = game.add.isoSprite(xt * tileSize, yt * tileSize, 0, 'rock', 0, obstacleGroup);
		            	rock.anchor.set(0.5);
	
		            	// Let the physics engine do its job on this tile type
		                game.physics.isoArcade.enable(rock);
	
		                // This will prevent our physic bodies from going out of the screen
		                rock.body.collideWorldBounds = true;
	
		                // set the physics bounce amount on each axis  (X, Y, Z)
		                rock.body.bounce.set(0.2, 0.2, 0);
	
		                // set the slow down rate on each axis (X, Y, Z)
		                rock.body.drag.set(100, 100, 0);
	                
	            	}
	            	     

	            	if (tile[xt] == 1 || tile[xt] == 2) {
		            	cactus1.anchor.set(0.5);
	
		                // Let the physics engine do its job on this tile type
		                game.physics.isoArcade.enable(cactus1);
	
		                // This will prevent our physic bodies from going out of the screen
		                cactus1.body.collideWorldBounds = true;
		                
		                // Make the cactus body immovable
		                cactus1.body.immovable = true;
		             
	            	}	

	        	}
	        	
	        }
	          
	        // create a mine object which will be our ending point in the game
	        var mine = game.add.isoSprite(800, 100, 0, 'mine', 0, obstacleGroup);
	        	mine.anchor.set(0.5);
	        	
	        	game.physics.isoArcade.enable(mine);
	        	mine.body.collideWorldBounds = true;
	        	mine.body.immovable = true;
	        
	        // create collectible items 
	        marker = game.add.isoSprite(rndNum(800), rndNum(800), 0, 'gold', 0, itemGroup);
	        game.physics.isoArcade.enable(marker);
	        marker.body.collideWorldBounds = true;
	        marker.anchor.set(0.5);
	        
	        marker2 = game.add.isoSprite(rndNum(800), rndNum(800), 0, 'revolver', 0, itemGroup);
	        game.physics.isoArcade.enable(marker2);
	        marker2.body.collideWorldBounds = true;
	        marker2.anchor.set(0.5);
	        
	        marker3 = game.add.isoSprite(rndNum(800), rndNum(800), 0, 'badge', 0, itemGroup);
	        game.physics.isoArcade.enable(marker3);
	        marker3.body.collideWorldBounds = true;
	        marker3.anchor.set(0.5);
	        
	        marker4 = game.add.isoSprite(rndNum(800), rndNum(800), 0, 'skull', 0, itemGroup);
	        game.physics.isoArcade.enable(marker4);
	        marker4.body.collideWorldBounds = true;
	        marker4.anchor.set(0.5);
	        
	        // create the exit marker next to the mine object
	        exitMarker = game.add.isoSprite(830, 194, 0, 'exit', 0, itemGroup);
	        game.physics.isoArcade.enable(exitMarker);
	        exitMarker.body.collideWorldBounds = true;
	        exitMarker.anchor.set(0.5);
	        exitMarker.alpha = 0.5;
	               
	        // create the collected item text
		       itemsTxt = game.add.text(100, 8, txt, {
			        font: "16px Arial",
			        fill: "#FFFFFF",
			        align: "center"
			    });
		       
		       itemsTxt.fixedToCamera = true;
		       
		    // create the information text field about the status of the game   
		       endTxt = game.add.text(0, 8, finalTxt, {
			        font: "18px Arial",
			        fill: "#FFFF00",
			        align: "center"
			    });
		    	
		       endTxt.fixedToCamera = true;       
		       endTxt.anchor.x = Math.round(endTxt.width * 0.5) / endTxt.width;
		       endTxt.cameraOffset.x = (width/3) * 2;
		       
		    // update both text fields
		       updateText();
		       updateEndText();
		       	       
		    // create control button sprites on the screen   
		    cNW = game.add.sprite(0, 100, 'NW');  
		    cNW.fixedToCamera = true;
		    cNW.inputEnabled = true;
		    cNW.events.onInputDown.add(onDown, this);
		    cNW.events.onInputOver.add(onDown, this);
		    cNW.events.onInputUp.add(onUp, this);
		    cNW.events.onInputOut.add(onUp, this);
		    
		    cW = game.add.sprite(0, 176, 'W');  
		    cW.fixedToCamera = true;
		    cW.inputEnabled = true;
		    cW.events.onInputDown.add(onDown, this);
		    cW.events.onInputOver.add(onDown, this);
		    cW.events.onInputUp.add(onUp, this);
		    cW.events.onInputOut.add(onUp, this);
		    
		    cSW = game.add.sprite(0, 252, 'SW');  
		    cSW.fixedToCamera = true;
		    cSW.inputEnabled = true;
		    cSW.events.onInputDown.add(onDown, this);
		    cSW.events.onInputOver.add(onDown, this);
		    cSW.events.onInputUp.add(onUp, this);
		    cSW.events.onInputOut.add(onUp, this);
		    
		    cN = game.add.sprite(76, 100, 'N');  
		    cN.fixedToCamera = true;
		    cN.inputEnabled = true;
		    cN.events.onInputDown.add(onDown, this);
		    cN.events.onInputOver.add(onDown, this);
		    cN.events.onInputUp.add(onUp, this);
		    cN.events.onInputOut.add(onUp, this);
		    
		    cS = game.add.sprite(76, 252, 'S');  
		    cS.fixedToCamera = true;
		    cS.inputEnabled = true;   
		    cS.events.onInputDown.add(onDown, this);
		    cS.events.onInputOver.add(onDown, this);
		    cS.events.onInputUp.add(onUp, this);
		    cS.events.onInputOut.add(onUp, this);
		    
		    cNE = game.add.sprite(152, 100, 'NE');
		    cNE.fixedToCamera = true;
		    cNE.inputEnabled = true;
		    cNE.events.onInputDown.add(onDown, this);
		    cNE.events.onInputOver.add(onDown, this);
		    cNE.events.onInputUp.add(onUp, this);
		    cNE.events.onInputOut.add(onUp, this);
		    
		    cE = game.add.sprite(152, 176, 'E');  
		    cE.fixedToCamera = true;
		    cE.inputEnabled = true;
		    cE.events.onInputDown.add(onDown, this);
		    cE.events.onInputOver.add(onDown, this);
		    cE.events.onInputUp.add(onUp, this);
		    cE.events.onInputOut.add(onUp, this);
		    
		    cSE = game.add.sprite(152, 252, 'SE');  
		    cSE.fixedToCamera = true;
		    cSE.inputEnabled = true;
		    cSE.events.onInputDown.add(onDown, this);
		    cSE.events.onInputOver.add(onDown, this);
		    cSE.events.onInputUp.add(onUp, this);
		    cSE.events.onInputOut.add(onUp, this);
	        
		    // create control functions for the control buttons
		    function onDown(sprite, pointer) {

		    	if (sprite.key == "N") {
		    		
		    		Ndown = true;
			    	
		    	}
		    	
		    	if (sprite.key == "S") {
		    		
		    		Sdown = true;
			    	
		    	}
		    	
		    	if (sprite.key == "SE") {
		    		
		    		SEdown = true;
			    	
		    	}
		    	
		    	if (sprite.key == "SW") {
		    		
		    		SWdown = true;
			    	
		    	}
		    	
		    	if (sprite.key == "NW") {
		    		
		    		NWdown = true;
			    	
		    	}
		    	
		    	if (sprite.key == "NE") {
		    		
		    		NEdown = true;
			    	
		    	}
		    	
		    	if (sprite.key == "E") {
		    		
		    		Edown = true;
			    	
		    	}
		    	
		    	if (sprite.key == "W") {
		    		
		    		Wdown = true;
			    	
		    	}
		    	
		    
		    }
		    
		    
		    function onUp(sprite, pointer) {
		    
		    	Ndown = false;
		    	Sdown = false;
		    	SEdown = false;
		    	SWdown = false;
		    	NEdown = false;
		    	NWdown = false;
		    	Edown = false;
		    	Wdown = false;
		    	
		    }
		    
		    controls = game.add.group();
		    controls.add(cN);
		    controls.add(cS);
		    controls.add(cW);
		    controls.add(cE);
		    controls.add(cNE);
		    controls.add(cNW);
		    controls.add(cSE);
		    controls.add(cSW);
		    
		    controls.alpha = 0.6;
		    
		    
		   
		    
	        // Create the player
	        player = game.add.isoSprite(350, 280, 0, 'characterAnim', 0, obstacleGroup);
	        
	        player.alpha = 0.6;
	                
	        // add the animations from the spritesheet
	        player.animations.add('S', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
	        player.animations.add('SW', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
	        player.animations.add('W', [16, 17, 18, 19, 20, 21, 22, 23], 10, true);
	        player.animations.add('NW', [24, 25, 26, 27, 28, 29, 30, 31], 10, true);
	        player.animations.add('N', [32, 33, 34, 35, 36, 37, 38, 39], 10, true);
	        player.animations.add('NE', [40, 41, 42, 43, 44, 45, 46, 47], 10, true);
	        player.animations.add('E', [48, 49, 50, 51, 52, 53, 54, 55], 10, true);
	        player.animations.add('SE', [56, 57, 58, 59, 60, 61, 62, 63], 10, true);
	         
	        player.anchor.set(0.5);
	        
	        // enable physics on the player
	        game.physics.isoArcade.enable(player);
	       
	        player.body.collideWorldBounds = true;

	        game.camera.follow(player);
	        
	        //  ***  create an enemy cowboy  ***  
	        cowboy = game.add.isoSprite(4 * tileSize, 4 * tileSize, 0, 'cowboy', 0, obstacleGroup);
	        
	        // add the animations from the spritesheet
	        cowboy.animations.add('S', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
	        cowboy.animations.add('SW', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
	        cowboy.animations.add('W', [16, 17, 18, 19, 20, 21, 22, 23], 10, true);
	        cowboy.animations.add('NW', [24, 25, 26, 27, 28, 29, 30, 31], 10, true);
	        cowboy.animations.add('N', [32, 33, 34, 35, 36, 37, 38, 39], 10, true);
	        cowboy.animations.add('NE', [40, 41, 42, 43, 44, 45, 46, 47], 10, true);
	        cowboy.animations.add('E', [48, 49, 50, 51, 52, 53, 54, 55], 10, true);
	        cowboy.animations.add('SE', [56, 57, 58, 59, 60, 61, 62, 63], 10, true);
	        
	        cowboy.anchor.set(0.5);
	        
	        // enable physics on the cowboy enemy
	        game.physics.isoArcade.enable(cowboy);
	        cowboy.body.collideWorldBounds = true;
	        
	        // set the physics bounce amount on each axis  (X, Y, Z)
	        cowboy.body.bounce.set(0.2, 0.2, 0);

            // set the slow down rate on each axis (X, Y, Z)
	        cowboy.body.drag.set(100, 100, 0);
	     
	       // cowboy.animations.play('S');
	        
	       // cowboy.body.mass = 0;
	              
	        setInterval(function(){ 
	        	
	        	easystar.findPath(currentCowboyXtile, currentCowboyYtile, currentPlayerXtile, currentPlayerYtile, function( path ) {
	        	    if (path === null) {
	        	        console.log("The path to the destination point was not found.");
	        	    } 
	        	    
	        	    if (path) {
	        	    	currentNextPointX = path[1].x;
	        	        currentNextPointY = path[1].y;
	        	    }
	        	    
	        	    if (currentNextPointX < currentCowboyXtile && currentNextPointY < currentCowboyYtile)
	        	    {
	        	    	// left up
	        	    	
	        	    	console.log("GO LEFT UP");
	        	    	
	        	    	enemyDirection = "NW";
	        	    }
	        	    else if (currentNextPointX == currentCowboyXtile && currentNextPointY < currentCowboyYtile)
	        	    {
	        	    	// up
	        	    	
	        	    	console.log("GO UP");
	        	    	
	        	    	enemyDirection = "N";
	        	    	
	        	    }
	        	    else if (currentNextPointX > currentCowboyXtile && currentNextPointY < currentCowboyYtile)
	        	    {
	        	    	// right up
	        	    	
	        	    	console.log("GO RIGHT UP");
	        	    	
	        	    	enemyDirection = "NE";
	        	    	
	        	    }
	        	    else if (currentNextPointX < currentCowboyXtile && currentNextPointY == currentCowboyYtile)
	        	    {
	        	    	// left
	        	    	
	        	    	console.log("GO LEFT");
	        	    	
	        	    	enemyDirection = "W";
	        	    	
	        	    }
	        	    else if (currentNextPointX > currentCowboyXtile && currentNextPointY == currentCowboyYtile)
	        	    {
	        	    	// right
	        	    	
	        	    	console.log("GO RIGHT");
	        	    	
	        	    	enemyDirection = "E";
	        	    
	        	    }
	        	    else if (currentNextPointX > currentCowboyXtile && currentNextPointY > currentCowboyYtile)
	        	    {
	        	    	// right down
	        	    	
	        	    	console.log("GO RIGHT DOWN");
	        	    	
	        	    	enemyDirection = "SE";
	        	    	
	        	    }
	        	    else if (currentNextPointX == currentCowboyXtile && currentNextPointY > currentCowboyYtile)
	        	    {
	        	    	// down
	        	    	
	        	    	console.log("GO DOWN");
	        	    	
	        	    	enemyDirection = "S";
	        	    	
	        	    }
	        	    else if (currentNextPointX < currentCowboyXtile && currentNextPointY > currentCowboyYtile)
	        	    {
	        	    	// left down
	        	    	
	        	    	console.log("GO LEFT DOWN");
	        	    	
	        	    	enemyDirection = "SW";
	        	    	
	        	    }
	        	    else
	        	    {
	        	    	
	        	    	enemyDirection = "STOP";
	        	    	
	        	    }
	        	    
	        	    if (enemyDirection != "STOP") cowboy.animations.play(enemyDirection);
	        	    
	        	});

	        	easystar.calculate();
	        	
	        }, timeStep);
	        
	    },
	    update: function () {
	        
	    	// Move the player
	        var speed = 100;
	       
	        if (Ndown == true) {
	        	player.body.velocity.y = -speed;
	        	player.body.velocity.x = -speed;
	        }
	        else if (Sdown == true)
	        {
	        	player.body.velocity.y = speed;
	        	player.body.velocity.x = speed;
	        }
	        else if (Edown == true) {
	        	player.body.velocity.x = speed;
	        	player.body.velocity.y = -speed;
	        }
	        else if (Wdown == true)
	        {
	        	player.body.velocity.x = -speed;
	        	player.body.velocity.y = speed;
	        }
	        else if (SEdown == true)
	        {
	        	player.body.velocity.x = speed;
	        	player.body.velocity.y = 0;
	        }
	        else if (SWdown == true)
	        {
	        	player.body.velocity.y = speed;
	        	player.body.velocity.x = 0;
	        }
	        else if (NWdown == true)
	        {
	        	player.body.velocity.x = -speed;
	        	player.body.velocity.y = 0;
	        	
	        }
	        else if (NEdown == true)
	        {
	        	player.body.velocity.y = -speed;
	        	player.body.velocity.x = 0;
	        	
	        }
	        else
	        {
	        	player.body.velocity.x = 0;
	        	player.body.velocity.y = 0;
	        }
	        
	        
	        if (Ndown == true) {
	        	player.animations.play('N');
	        }
	        else if (Sdown == true)
	        {
	        	player.animations.play('S');
	        }
	        else if (Edown == true) {
	        	player.animations.play('E');
	        }
	        else if (Wdown == true)
	        {
	        	player.animations.play('W');
	        }
	        else if (SEdown == true)
	        {
	        	player.animations.play('SE');
	        }
	        else if (SWdown == true)
	        {
	        	player.animations.play('SW');
	        }
	        else if (NWdown == true)
	        {
	        	player.animations.play('NW');
	        	
	        }
	        else if (NEdown == true)
	        {
	        	player.animations.play('NE');
	        	
	        }
	        else
	        {
	        	player.animations.stop();
	        }

	        
	     // Move the ENEMY
	        var enemySpeed = 90;
	       
	        if (enemyDirection == "N") {
	        	cowboy.body.velocity.x = -enemySpeed;
	        	cowboy.body.velocity.y = -enemySpeed;
	        }
	        else if (enemyDirection == "S")
	        {
	        	cowboy.body.velocity.x = enemySpeed;
	        	cowboy.body.velocity.y = enemySpeed;
	        }
	        else if (enemyDirection == "E") {
	        	cowboy.body.velocity.x = enemySpeed;
	        	cowboy.body.velocity.y = -enemySpeed;
	        }
	        else if (enemyDirection == "W")
	        {
	        	cowboy.body.velocity.x = -enemySpeed;
	        	cowboy.body.velocity.y = enemySpeed;
	        }
	        else if (enemyDirection == "SE")
	        {
	        	cowboy.body.velocity.x = enemySpeed;
	        	cowboy.body.velocity.y = 0;
	        }
	        else if (enemyDirection == "NW")
	        {
	        	cowboy.body.velocity.x = -enemySpeed;
	        	cowboy.body.velocity.y = 0;   	
	        }
	        else if (enemyDirection == "SW")
	        {
	        	cowboy.body.velocity.x = 0;
	        	cowboy.body.velocity.y = enemySpeed;    	
	        }
	       
	        else if (enemyDirection == "NE")
	        {
	        	cowboy.body.velocity.x = 0;
	        	cowboy.body.velocity.y = -enemySpeed;
	        }
	        else if (enemyDirection == "STOP")
	        {
	        	cowboy.body.velocity.x = 0;
	        	cowboy.body.velocity.y = 0;
	        }
	        else // JUST IN CASE IF enemyDirection wouldnt exist we stop the cowboy movement
	        {
	        	cowboy.body.velocity.x = 0;
	        	cowboy.body.velocity.y = 0;
	        }
	        
        
	        game.physics.isoArcade.collide(obstacleGroup);
	        
	        game.physics.isoArcade.overlap(marker, player ,function(e){
	        	e.destroy();
	        	
	        	addItem();
	        	
	        });
	        
	        game.physics.isoArcade.overlap(marker2, player ,function(e){
	        	e.destroy();
	        	
	        	addItem();
	        	
	        });
	        
	        game.physics.isoArcade.overlap(marker3, player ,function(e){
	        	e.destroy();
	        	
	        	addItem();
	        	
	        });
	        
	        game.physics.isoArcade.overlap(marker4, player ,function(e){
	        	e.destroy();
	        	
	        	addItem();
	        	
	        });
	               
	       check = game.physics.isoArcade.overlap(exitMarker, player ,function(e){
	        	
	        	if (currentItemCount >= totalItemCount){
	        		console.log("END GAME GOOD! :)");
	        		
	        		updateEndText(2);
	        		
	        	}
	        	else
	        	{
	        		updateEndText(1);
	        	}
	        	
	        });
	        
	       endTxt.visible = check;
	       
	      
               currentPlayerXtile = Math.floor(player.body.position.x / tileSize);
		       currentPlayerYtile = Math.floor(player.body.position.y / tileSize);		 
		    
		   // PREVENT FROM GOING OUT FROM THE LOGICAL ARRAY BECAUSE OF THE PHASER PHYSICS ENGINE
		           
	       if (currentPlayerXtile < 0) currentPlayerXtile = 0;
	       if (currentPlayerYtile < 0) currentPlayerYtile = 0;
	       
	       if (currentPlayerXtile > 28) currentPlayerXtile = 28;
	       if (currentPlayerYtile > 28) currentPlayerYtile = 28;

		       currentCowboyXtile = Math.floor(cowboy.body.position.x / tileSize);
		       currentCowboyYtile = Math.floor(cowboy.body.position.y / tileSize);
	       
		   // PREVENT FROM GOING OUT FROM THE LOGICAL ARRAY BECAUSE OF THE PHASER PHYSICS ENGINE    
		       
	       if (currentCowboyXtile < 0) currentCowboyXtile = 0;
	       if (currentCowboyYtile < 0) currentCowboyYtile = 0;
	       
	       if (currentCowboyXtile > 28) currentCowboyXtile = 28;
	       if (currentCowboyYtile > 28) currentCowboyYtile = 28;
	           
	       //cowboy.body.velocity.x = 30;
	       
	       game.iso.topologicalSort(obstacleGroup);
	        
	    },
	    render: function () {
	    	
	    /*
	       game.debug.text("PLAYER X = " + currentPlayerXtile, 400, 22, "#ffffff");
	       game.debug.text("PLAYER Y = " + currentPlayerYtile, 400, 42, "#ffffff");
	       
	       game.debug.text("COWBOY X = " + currentCowboyXtile, 400, 62, "#ffffff");
	       game.debug.text("COWBOY Y = " + currentCowboyYtile, 400, 82, "#ffffff");
	       
	       game.debug.text("NEXTPOINT X = " + currentNextPointX, 400, 102, "#ffffff");
	       game.debug.text("NEXTPOINT Y = " + currentNextPointY, 400, 122, "#ffffff");
	    */
	    	
	       //obstacleGroup.forEach(function (tile) { game.debug.body(tile, 'rgba(189, 221, 235, 0.6)', false); });
	    	
	    }
	};

	game.state.add('Boot', BasicGame.Boot);
	game.state.start('Boot');
	
	// add the collected item
	function addItem() {
		
		currentItemCount++;
		updateText();
		
	}
	
	// update the item text field
	function updateText() {
		
		 txt = "ITEMS: " + currentItemCount + "/" + totalItemCount;
	     itemsTxt.setText(txt);
		
	}
	
	// update the end text field
	function updateEndText(_t) {
		
		switch(_t) {
		
			case 0:
				finalTxt = "";
			break;
			
			case 1:
				finalTxt = "YOU MUST FIND ALL THE ITEMS!!!";
			break;
			
			case 2:
				finalTxt = "YOU FOUND ALL THE ITEMS!!! :)";
			break;

		}
		
		endTxt.setText(finalTxt);
	    
	}
	
	// generate random number
	function rndNum(num) {
		
		return Math.round(Math.random() * num);
		
	}
	
	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};

// window.onload can work without <body onload="">
window.onload = init;
