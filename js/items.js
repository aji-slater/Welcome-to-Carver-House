var itemCreate = function(){
  necklace = game.add.isoSprite(xTilePosition(4)-15, yTilePosition(2)-25, 0, 'necklace', 0, itemGroup);
  necklace.anchor.set(0.5, 0.5);
  necklace.bringToTop();
  key = this.game.add.isoSprite(xTilePosition(14), yTilePosition(4), 0, 'key', 0, itemGroup);
  key.anchor.set(0.5, 0.5);
};

var pickUpNecklace = function(event, sprite){
  if (game.physics.arcade.distanceBetween(necklace, player) < 100) {
    inventory.push("necklace");
    necklace.kill();
    console.log(inventory); }
};

var pickUpKey = function(event, sprite){
  if (game.physics.arcade.distanceBetween(key, player) < 100) {
    inventory.push("key");
    key.kill();
    console.log(inventory); }
};


var tableCreate = function(){
  table = game.add.isoSprite(xTilePosition(4), yTilePosition(2), 0, 'sideTable', 0, furnishGroup);
  table.anchor.set(0.5);

  game.debug.body(table, 'rgba(189, 221, 235, 0.6)', false);

  game.physics.isoArcade.enable(this.table);
  table.body.setSize(30, 20, 45);
  table.body.collideWorldBounds = true;
  table.body.immovable = true;
};

var itemInputs = function(){
  necklace.inputEnabled = true;
  necklace.input.useHandCursor = true; //if you want a hand cursor
  necklace.events.onInputDown.add(pickUpNecklace, this);
  key.inputEnabled = true;
  key.input.useHandCursor = true; //if you want a hand cursor
  key.events.onInputDown.add(pickUpKey, this);
};

var itemInteract = function(){
  itemGroup.forEach(function (item) {
    var inBounds = item.isoBounds.containsXY(cursorPos.x, cursorPos.y);
    if (!item.selected && inBounds) {
      item.selected = true;
      item.frame = 1;
      item.tint = 0xffffff;
      game.add.tween(item).to({ isoZ: 4 }, 200, Phaser.Easing.Quadratic.InOut, true);
    }
    else if (item.selected && !inBounds) {
      item.selected = false;
      item.frame = 0;
      item.tint = 0xffffff;
      game.add.tween(item).to({ isoZ: 0 }, 200, Phaser.Easing.Quadratic.InOut, true);
    }
  });
};
