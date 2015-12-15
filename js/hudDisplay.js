var hudDisplay = function(){
  hudFrame = this.game.add.sprite(30, 30, 'hudFrame');
  hudFrame.fixedToCamera = true;
  hudFrame.inputEnabled = true;
};

var hudClick = function(){
  // hudFrame.inputEnabled = true;
  hudFrame.events.onInputDown.add(function(){
    if (isPaused){
      unPause();
    } else {
      pause();
    }
  }, this);
};

var pause = function(){
    populateInventory();
  popup = this.game.add.sprite(game.camera.width / 2, game.camera.height / 2, 'inventoryMenu', menuGroup);
  popup.alpha = 0;

  popup.fixedToCamera = true;
  popup.anchor.setTo(0.5, 0.5);
  hudFrame.tint = 0x777777;
  var menuAppear = game.add.tween(popup).to( { alpha: 1 }, 120, Phaser.Easing.Linear.None, true, 0, 0, false);
  isPaused = true;
  // menuAppear.onComplete.add(function(){ populateInventory(); }, this);
};

var unPause = function(){
  isPaused = false;

  var disappear = game.add.tween(popup).to( { alpha: 0 }, 115, Phaser.Easing.Linear.None, true, 0, 0, false);
  disappear.onComplete.add(function(){ popup.kill(); }, this);
  hudFrame.tint = 0xffffff;
};
//
var populateInventory = function() {
  for (i = 0; i <= inventory.length -1; i++ ){
    inventoryItem = game.add.sprite(itemMenuX(i), itemMenuY(i), "inv" + inventory[i], 0, menuGroup);
    inventoryItem.fixedToCamera = true;
    inventoryItem.bringToTop();

  }
};

//   inventory.push("skull");
//   inventory.push("skull");
//   i = 0;
//   inventory.forEach( function(item){
//     item = game.add.sprite(itemMenuX(i), itemMenuY(i), item + 'Inv', 1, menuGroup);
//     item.fixedToCamera = true;
//     i++;
//   });

//
var itemMenuX = function(index){
  if ( index <= 3 ){
  return game.camera.width/2-200 + index * 100;
} else {
  return game.camera.width/2-200 + (index-4) * 100;
}
};

var itemMenuY = function(index){
  if ( index <= 3 ){
    return game.camera.height/2 - 150;
  } else {
    return game.camera.height/2;
  }
};
//
// var clearMenu = function(){
//   popup.kill();
//   // inventory.forEach( function(item){
//   //   (item).kill();
//   // });
// };
