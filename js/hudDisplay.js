var hudDisplay = function(){
  hudFrame = this.game.add.sprite(30, 30, 'hudFrame', menuGroup);
  hudFrame.fixedToCamera = true;
};

var hudClick = function(){
  hudFrame.inputEnabled = true;
  hudFrame.events.onInputDown.add(function(){
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
  game.add.tween(popup).to( { alpha: 1 }, 120, Phaser.Easing.Linear.None, true, 0, 0, false);
  isPaused = true;
};

var unPause = function(){
  isPaused = false;
  var disappear = game.add.tween(popup).to( { alpha: 0 }, 120, Phaser.Easing.Linear.None, true, 0, 0, false);
  disappear.onComplete.add(function(){ popup.kill(); }, this);
  hudFrame.tint = 0xffffff;
};
