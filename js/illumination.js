
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
  if (game.physics.arcade.distanceBetween(tile, player) < 100) {
    tile.tint = 0xffffff;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 110 && game.physics.arcade.distanceBetween(tile, player) > 100) {
    tile.tint = 0xeeeeee;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 120 && game.physics.arcade.distanceBetween(tile, player) > 110) {
    tile.tint = 0xdddddd;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 130 && game.physics.arcade.distanceBetween(tile, player) > 120) {
    tile.tint = 0xcccccc;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 140 && game.physics.arcade.distanceBetween(tile, player) > 130) {
    tile.tint = 0xbbbbbb;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 150 && game.physics.arcade.distanceBetween(tile, player) > 140) {
    tile.tint = 0xaaaaaa;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 160 && game.physics.arcade.distanceBetween(tile, player) > 150) {
    tile.tint = 0x999999;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 170 && game.physics.arcade.distanceBetween(tile, player) > 160) {
    tile.tint = 0x888888;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 180 && game.physics.arcade.distanceBetween(tile, player) > 170) {
    tile.tint = 0x777777;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 190 && game.physics.arcade.distanceBetween(tile, player) > 180) {
    tile.tint = 0x666666;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 200 && game.physics.arcade.distanceBetween(tile, player) > 190) {
    tile.tint = 0x555555;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 210 && game.physics.arcade.distanceBetween(tile, player) > 200) {
    tile.tint = 0x444444;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 220 && game.physics.arcade.distanceBetween(tile, player) > 210) {
    tile.tint = 0x333333;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 230 && game.physics.arcade.distanceBetween(tile, player) > 220) {
    tile.tint = 0x222222;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 240 && game.physics.arcade.distanceBetween(tile, player) > 230) {
    tile.tint = 0x111111;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 250 && game.physics.arcade.distanceBetween(tile, player) > 240) {
    tile.tint = 0x000000;
  }
});

floorGroup.forEach(function (tile) {
  if (game.physics.arcade.distanceBetween(tile, player) < 100) {
    tile.tint = 0xffffff;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 110 && game.physics.arcade.distanceBetween(tile, player) > 100) {
    tile.tint = 0xeeeeee;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 120 && game.physics.arcade.distanceBetween(tile, player) > 110) {
    tile.tint = 0xdddddd;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 130 && game.physics.arcade.distanceBetween(tile, player) > 120) {
    tile.tint = 0xcccccc;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 140 && game.physics.arcade.distanceBetween(tile, player) > 130) {
    tile.tint = 0xbbbbbb;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 150 && game.physics.arcade.distanceBetween(tile, player) > 140) {
    tile.tint = 0xaaaaaa;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 160 && game.physics.arcade.distanceBetween(tile, player) > 150) {
    tile.tint = 0x999999;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 170 && game.physics.arcade.distanceBetween(tile, player) > 160) {
    tile.tint = 0x888888;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 180 && game.physics.arcade.distanceBetween(tile, player) > 170) {
    tile.tint = 0x777777;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 190 && game.physics.arcade.distanceBetween(tile, player) > 180) {
    tile.tint = 0x666666;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 200 && game.physics.arcade.distanceBetween(tile, player) > 190) {
    tile.tint = 0x555555;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 210 && game.physics.arcade.distanceBetween(tile, player) > 200) {
    tile.tint = 0x444444;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 220 && game.physics.arcade.distanceBetween(tile, player) > 210) {
    tile.tint = 0x333333;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 230 && game.physics.arcade.distanceBetween(tile, player) > 220) {
    tile.tint = 0x222222;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 240 && game.physics.arcade.distanceBetween(tile, player) > 230) {
    tile.tint = 0x111111;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 250 && game.physics.arcade.distanceBetween(tile, player) > 240) {
    tile.tint = 0x000000;
  }
});

itemGroup.forEach(function (tile) {
  if (game.physics.arcade.distanceBetween(tile, player) < 100) {
    tile.tint = 0xffffff;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 110 && game.physics.arcade.distanceBetween(tile, player) > 100) {
    tile.tint = 0xeeeeee;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 120 && game.physics.arcade.distanceBetween(tile, player) > 110) {
    tile.tint = 0xdddddd;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 130 && game.physics.arcade.distanceBetween(tile, player) > 120) {
    tile.tint = 0xcccccc;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 140 && game.physics.arcade.distanceBetween(tile, player) > 130) {
    tile.tint = 0xbbbbbb;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 150 && game.physics.arcade.distanceBetween(tile, player) > 140) {
    tile.tint = 0xaaaaaa;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 160 && game.physics.arcade.distanceBetween(tile, player) > 150) {
    tile.tint = 0x999999;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 170 && game.physics.arcade.distanceBetween(tile, player) > 160) {
    tile.tint = 0x888888;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 180 && game.physics.arcade.distanceBetween(tile, player) > 170) {
    tile.tint = 0x777777;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 190 && game.physics.arcade.distanceBetween(tile, player) > 180) {
    tile.tint = 0x666666;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 200 && game.physics.arcade.distanceBetween(tile, player) > 190) {
    tile.tint = 0x555555;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 210 && game.physics.arcade.distanceBetween(tile, player) > 200) {
    tile.tint = 0x444444;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 220 && game.physics.arcade.distanceBetween(tile, player) > 210) {
    tile.tint = 0x333333;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 230 && game.physics.arcade.distanceBetween(tile, player) > 220) {
    tile.tint = 0x222222;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 240 && game.physics.arcade.distanceBetween(tile, player) > 230) {
    tile.tint = 0x111111;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 250 && game.physics.arcade.distanceBetween(tile, player) > 240) {
    tile.tint = 0x000000;
  }
});

wallGroup.forEach(function (tile) {
  if (game.physics.arcade.distanceBetween(tile, player) < 100) {
    tile.tint = 0xffffff;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 110 && game.physics.arcade.distanceBetween(tile, player) > 100) {
    tile.tint = 0xeeeeee;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 120 && game.physics.arcade.distanceBetween(tile, player) > 110) {
    tile.tint = 0xdddddd;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 130 && game.physics.arcade.distanceBetween(tile, player) > 120) {
    tile.tint = 0xcccccc;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 140 && game.physics.arcade.distanceBetween(tile, player) > 130) {
    tile.tint = 0xbbbbbb;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 150 && game.physics.arcade.distanceBetween(tile, player) > 140) {
    tile.tint = 0xaaaaaa;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 160 && game.physics.arcade.distanceBetween(tile, player) > 150) {
    tile.tint = 0x999999;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 170 && game.physics.arcade.distanceBetween(tile, player) > 160) {
    tile.tint = 0x888888;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 180 && game.physics.arcade.distanceBetween(tile, player) > 170) {
    tile.tint = 0x777777;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 190 && game.physics.arcade.distanceBetween(tile, player) > 180) {
    tile.tint = 0x666666;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 200 && game.physics.arcade.distanceBetween(tile, player) > 190) {
    tile.tint = 0x555555;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 210 && game.physics.arcade.distanceBetween(tile, player) > 200) {
    tile.tint = 0x444444;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 220 && game.physics.arcade.distanceBetween(tile, player) > 210) {
    tile.tint = 0x333333;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 230 && game.physics.arcade.distanceBetween(tile, player) > 220) {
    tile.tint = 0x222222;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 240 && game.physics.arcade.distanceBetween(tile, player) > 230) {
    tile.tint = 0x111111;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 250 && game.physics.arcade.distanceBetween(tile, player) > 240) {
    tile.tint = 0x000000;
  }
});

enemyGroup.forEach(function (tile) {
  if (game.physics.arcade.distanceBetween(tile, player) < 100) {
    tile.tint = 0xffffff;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 110 && game.physics.arcade.distanceBetween(tile, player) > 100) {
    tile.tint = 0xeeeeee;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 120 && game.physics.arcade.distanceBetween(tile, player) > 110) {
    tile.tint = 0xdddddd;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 130 && game.physics.arcade.distanceBetween(tile, player) > 120) {
    tile.tint = 0xcccccc;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 140 && game.physics.arcade.distanceBetween(tile, player) > 130) {
    tile.tint = 0xbbbbbb;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 150 && game.physics.arcade.distanceBetween(tile, player) > 140) {
    tile.tint = 0xaaaaaa;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 160 && game.physics.arcade.distanceBetween(tile, player) > 150) {
    tile.tint = 0x999999;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 170 && game.physics.arcade.distanceBetween(tile, player) > 160) {
    tile.tint = 0x888888;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 180 && game.physics.arcade.distanceBetween(tile, player) > 170) {
    tile.tint = 0x777777;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 190 && game.physics.arcade.distanceBetween(tile, player) > 180) {
    tile.tint = 0x666666;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 200 && game.physics.arcade.distanceBetween(tile, player) > 190) {
    tile.tint = 0x555555;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 210 && game.physics.arcade.distanceBetween(tile, player) > 200) {
    tile.tint = 0x444444;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 220 && game.physics.arcade.distanceBetween(tile, player) > 210) {
    tile.tint = 0x333333;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 230 && game.physics.arcade.distanceBetween(tile, player) > 220) {
    tile.tint = 0x222222;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 240 && game.physics.arcade.distanceBetween(tile, player) > 230) {
    tile.tint = 0x111111;
  }
  if (game.physics.arcade.distanceBetween(tile, player) < 250 && game.physics.arcade.distanceBetween(tile, player) > 240) {
    tile.tint = 0x000000;
  }
});

};
