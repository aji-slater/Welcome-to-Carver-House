function Item (name, x, y) {
  this.name = name;
  this.sprite = null;
  this.createSprite = function(x, y){
    this.sprite = game.add.isoSprite(xTilePosition(x), yTilePosition(y), 0, this.name, 0, itemGroup);
    this.sprite.anchor.set(0.5);
    this.sprite.bringToTop();
    this.sprite.inputEnabled = true;
    this.sprite.useHandCursor = true;
  };
}
Item.prototype = {

  pickUp: function(){
    if (game.physics.arcade.distanceBetween(this.sprite, player) < 100);
  },

  update: function(){
    this.sprite.events.onInputOver.add(this.lightUp, this);
    this.sprite.events.onInputOut.add(lightOff, this);
    if (this.sprite.events.onUnputDown.add(pickUp, this)){
      this.pickUp();
    }
  },

  lightUp: function(){
    this.sprite.frame = 1;
  },

  lightOff: function(){
    this.sprite.frame = 0;
  }
};


function itemsUpdating() {
  itemGroup.forEach(function(item) {
    item.update();
  });
}

function newItemCreate() {
  var possibleItems = ["Skull", "Key", "Necklace"];
  
  item = new Item();
}
