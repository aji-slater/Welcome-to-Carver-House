var hudDisplay = function(){
  hudFrame = this.game.add.sprite(30, 30, 'hudFrame', menuGroup);
  hudFrame.fixedToCamera = true;
};

var hudClick = function(){
  hudFrame.inputEnabled = true;
  hudFrame.events.onInputDown.add(pause, this);
};

var pause = function(){
  popup = this.game.add.sprite(game.camera.width / 2, game.camera.height / 2, 'inventoryMenu', menuGroup);
  popup.fixedToCamera = true;
  popup.anchor.setTo(0.5, 0.5);
  hudFrame.tint = 0x777777;
  isPaused = true;


    // game.add.tween(hudFrame).to({ tint: 4 }, 200, Phaser.Easing.Quadratic.InOut, true);
};
