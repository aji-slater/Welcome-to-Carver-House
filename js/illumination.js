
var illuminate = function(){
floorGroup.forEach(function (tile) {
  tile.tint = 0x000000;
});
itemGroup.forEach(function (item) {
  item.tint = 0x000000;
});
furnishGroup.forEach(function (item) {
  item.tint = 0x000000;
});

furnishGroup.forEach(function (tile) {
  if (game.physics.arcade.distanceBetween(tile, player) < 50) {
    tile.tint = 0xffffff;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 90 && game.physics.arcade.distanceBetween(tile, player) > 50) {
    tile.tint = 0xcccccc;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 130 && game.physics.arcade.distanceBetween(tile, player) > 90) {
    tile.tint = 0x999999;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 170 && game.physics.arcade.distanceBetween(tile, player) > 130) {
    tile.tint = 0x777777;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 210 && game.physics.arcade.distanceBetween(tile, player) > 170) {
    tile.tint = 0x444444;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 250 && game.physics.arcade.distanceBetween(tile, player) > 210) {
    tile.tint = 0x222222;
  };
});


floorGroup.forEach(function (tile) {
  if (game.physics.arcade.distanceBetween(tile, player) < 50) {
    tile.tint = 0xffffff;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 90 && game.physics.arcade.distanceBetween(tile, player) > 50) {
    tile.tint = 0xcccccc;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 130 && game.physics.arcade.distanceBetween(tile, player) > 90) {
    tile.tint = 0x999999;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 170 && game.physics.arcade.distanceBetween(tile, player) > 130) {
    tile.tint = 0x777777;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 210 && game.physics.arcade.distanceBetween(tile, player) > 170) {
    tile.tint = 0x444444;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 250 && game.physics.arcade.distanceBetween(tile, player) > 210) {
    tile.tint = 0x222222;
  };
});

itemGroup.forEach(function (tile) {
  if (game.physics.arcade.distanceBetween(tile, player) < 50) {
    tile.tint = 0xffffff;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 90 && game.physics.arcade.distanceBetween(tile, player) > 50) {
    tile.tint = 0xcccccc;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 130 && game.physics.arcade.distanceBetween(tile, player) > 90) {
    tile.tint = 0x999999;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 170 && game.physics.arcade.distanceBetween(tile, player) > 130) {
    tile.tint = 0x777777;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 210 && game.physics.arcade.distanceBetween(tile, player) > 170) {
    tile.tint = 0x444444;
  };
  if (game.physics.arcade.distanceBetween(tile, player) < 250 && game.physics.arcade.distanceBetween(tile, player) > 210) {
    tile.tint = 0x222222;
  };

});
}
