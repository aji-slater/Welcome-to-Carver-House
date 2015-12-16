function Item (name) {
  this.name = name;
}
Item.prototype = {
  sprite: function(){
    game.add.isoSprite(xTilePosition(x), yTilePosition(y), 0, this.name, 0, itemGroup);
  },

  pickUp: function(){
    if (game.physics.arcade.distanceBetween(this.sprite, player))
  }
};
