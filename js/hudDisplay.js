var activeItem, hudItem, hudFrame;

var hudDisplay = function(){
  hudFrame = this.game.add.sprite(30, 30, 'hudFrame');
  hudFrame.fixedToCamera = true;
  hudInv = this.game.add.sprite(35, 160, 'hudInvButton');
  hudInv.fixedToCamera = true;
  hudInv.inputEnabled = true;
  hudESC = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    hudESC.onDown.add(hudEscape, this);
};

var hudEscape = function(){
  if (isPaused){
    unPause();
  }
};

var hudClick = function(){
  // hudFrame.inputEnabled = true;
  hudInv.events.onInputDown.add(function(){
    if (isPaused){
      unPause();
    } else {
      pause();
    }
  }, this);
};



var pause = function(){
  popup = this.game.add.sprite(game.camera.width / 2, game.camera.height / 2, 'inventoryMenu', menuGroup);
  popup.alpha = 0;

  popup.fixedToCamera = true;
  popup.anchor.setTo(0.5, 0.5);
  hudFrame.tint = 0x777777;
  hudInv.tint = 0x777777;
  if (hudItem){ hudItem.tint = 0x777777; }
  var menuAppear = game.add.tween(popup).to( { alpha: 1 }, 120, Phaser.Easing.Linear.None, true, 0, 0, false);
  isPaused = true;
  inventoryExit = popup.addChild(game.make.sprite(-300, -210, "invExit", menuGroup));
  inventoryExit.inputEnabled = true;
  inventoryExit.events.onInputDown.add(function(){
    unPause();
  });
  var menuExitAppear = game.add.tween(inventoryExit).to( { alpha: 1 }, 100, Phaser.Easing.Linear.None, true, 0, 0, false);
  isPaused = true;
  menuAppear.onComplete.add(function(){ populateInventory(); }, this);
};

var unPause = function(){
  isPaused = false;

  var disappear = game.add.tween(popup).to( { alpha: 0 }, 115, Phaser.Easing.Linear.None, true, 0, 0, false);
  disappear.onComplete.add(function(){ popup.kill(); }, this);
  hudFrame.tint = 0xffffff;
  hudInv.tint = 0xffffff;
  if (activeItem) {
    hudItemImplementation();
  }
};

var invClickFunction = function(inventoryItem, pointer){
  if ( activeItem ){ hudItem.kill(); }
  activeItem = inventoryItem.key;
  unPause();
};

var populateInventory = function() {
  for (i = 0; i <= inventory.length -1; i++ ){
    inventoryItem = popup.addChild(game.make.sprite(itemMenuX(i), itemMenuY(i), "inv" + inventory[i], menuGroup));
    inventoryItem.inputEnabled = true;
    inventoryItem.events.onInputDown.add(invClickFunction, this);
    inventoryItem.events.hover
  }
};

var itemMenuX = function(index){
  if ( index <= 3 ){
    return -220 + index * 115;
  } else {
    return -220 + (index-4) * 115;
  }
};

var itemMenuY = function(index){
  if ( index <= 3 ){
    return -150;
  } else {
    return 0;
  }
};

var hudItemImplementation = function(){
  hudItem = hudFrame.addChild(game.make.sprite(hudFrame.width/2, hudFrame.height/2, activeItem, menuGroup));
  hudItem.scale.setTo(0.75, 0.75);
  hudItem.anchor.set(0.5);
  hudItem.inputEnabled = true;
  hudItem.input.enableDrag(true);
  hudItem.originalPosition = hudItem.position.clone();
  hudItem.events.onDragStart.add(function(){ hudItem.scale.setTo(0.4, 0.4);}, this);
  hudItem.events.onDragStop.add(function(){
    hudItem.position.copyFrom(hudItem.originalPosition);
    hudItem.scale.setTo(0.75, 0.75);
    hudItemDragCheck();
  });
};

var hudItemDragCheck = function() {

};
