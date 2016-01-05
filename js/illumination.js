
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

exitGroup.forEach(function (exit) {
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 100) {
    exit.tint = 0xffffff;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 110 && game.physics.arcade.distanceBetween(exit, player.sprite) > 100) {
    exit.tint = 0xeeeeee;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 120 && game.physics.arcade.distanceBetween(exit, player.sprite) > 110) {
    exit.tint = 0xdddddd;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 130 && game.physics.arcade.distanceBetween(exit, player.sprite) > 120) {
    exit.tint = 0xcccccc;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 140 && game.physics.arcade.distanceBetween(exit, player.sprite) > 130) {
    exit.tint = 0xbbbbbb;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 150 && game.physics.arcade.distanceBetween(exit, player.sprite) > 140) {
    exit.tint = 0xaaaaaa;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 160 && game.physics.arcade.distanceBetween(exit, player.sprite) > 150) {
    exit.tint = 0x999999;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 170 && game.physics.arcade.distanceBetween(exit, player.sprite) > 160) {
    exit.tint = 0x888888;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 180 && game.physics.arcade.distanceBetween(exit, player.sprite) > 170) {
    exit.tint = 0x777777;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 190 && game.physics.arcade.distanceBetween(exit, player.sprite) > 180) {
    exit.tint = 0x666666;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 200 && game.physics.arcade.distanceBetween(exit, player.sprite) > 190) {
    exit.tint = 0x555555;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 210 && game.physics.arcade.distanceBetween(exit, player.sprite) > 200) {
    exit.tint = 0x444444;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 220 && game.physics.arcade.distanceBetween(exit, player.sprite) > 210) {
    exit.tint = 0x333333;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 230 && game.physics.arcade.distanceBetween(exit, player.sprite) > 220) {
    exit.tint = 0x222222;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 240 && game.physics.arcade.distanceBetween(exit, player.sprite) > 230) {
    exit.tint = 0x111111;
  }
  if (game.physics.arcade.distanceBetween(exit, player.sprite) < 250 && game.physics.arcade.distanceBetween(exit, player.sprite) > 240) {
exit
  }
});

furnishGroup.forEach(function (tile) {
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 100) {
    tile.tint = 0xffffff;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 110 && game.physics.arcade.distanceBetween(tile, player.sprite) > 100) {
    tile.tint = 0xeeeeee;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 120 && game.physics.arcade.distanceBetween(tile, player.sprite) > 110) {
    tile.tint = 0xdddddd;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 130 && game.physics.arcade.distanceBetween(tile, player.sprite) > 120) {
    tile.tint = 0xcccccc;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 140 && game.physics.arcade.distanceBetween(tile, player.sprite) > 130) {
    tile.tint = 0xbbbbbb;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 150 && game.physics.arcade.distanceBetween(tile, player.sprite) > 140) {
    tile.tint = 0xaaaaaa;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 160 && game.physics.arcade.distanceBetween(tile, player.sprite) > 150) {
    tile.tint = 0x999999;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 170 && game.physics.arcade.distanceBetween(tile, player.sprite) > 160) {
    tile.tint = 0x888888;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 180 && game.physics.arcade.distanceBetween(tile, player.sprite) > 170) {
    tile.tint = 0x777777;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 190 && game.physics.arcade.distanceBetween(tile, player.sprite) > 180) {
    tile.tint = 0x666666;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 200 && game.physics.arcade.distanceBetween(tile, player.sprite) > 190) {
    tile.tint = 0x555555;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 210 && game.physics.arcade.distanceBetween(tile, player.sprite) > 200) {
    tile.tint = 0x444444;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 220 && game.physics.arcade.distanceBetween(tile, player.sprite) > 210) {
    tile.tint = 0x333333;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 230 && game.physics.arcade.distanceBetween(tile, player.sprite) > 220) {
    tile.tint = 0x222222;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 240 && game.physics.arcade.distanceBetween(tile, player.sprite) > 230) {
    tile.tint = 0x111111;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 250 && game.physics.arcade.distanceBetween(tile, player.sprite) > 240) {
    tile.tint = 0x000000;
  }
});

floorGroup.forEach(function (tile) {
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 100) {
    tile.tint = 0xffffff;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 110 && game.physics.arcade.distanceBetween(tile, player.sprite) > 100) {
    tile.tint = 0xeeeeee;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 120 && game.physics.arcade.distanceBetween(tile, player.sprite) > 110) {
    tile.tint = 0xdddddd;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 130 && game.physics.arcade.distanceBetween(tile, player.sprite) > 120) {
    tile.tint = 0xcccccc;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 140 && game.physics.arcade.distanceBetween(tile, player.sprite) > 130) {
    tile.tint = 0xbbbbbb;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 150 && game.physics.arcade.distanceBetween(tile, player.sprite) > 140) {
    tile.tint = 0xaaaaaa;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 160 && game.physics.arcade.distanceBetween(tile, player.sprite) > 150) {
    tile.tint = 0x999999;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 170 && game.physics.arcade.distanceBetween(tile, player.sprite) > 160) {
    tile.tint = 0x888888;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 180 && game.physics.arcade.distanceBetween(tile, player.sprite) > 170) {
    tile.tint = 0x777777;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 190 && game.physics.arcade.distanceBetween(tile, player.sprite) > 180) {
    tile.tint = 0x666666;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 200 && game.physics.arcade.distanceBetween(tile, player.sprite) > 190) {
    tile.tint = 0x555555;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 210 && game.physics.arcade.distanceBetween(tile, player.sprite) > 200) {
    tile.tint = 0x444444;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 220 && game.physics.arcade.distanceBetween(tile, player.sprite) > 210) {
    tile.tint = 0x333333;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 230 && game.physics.arcade.distanceBetween(tile, player.sprite) > 220) {
    tile.tint = 0x222222;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 240 && game.physics.arcade.distanceBetween(tile, player.sprite) > 230) {
    tile.tint = 0x111111;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 250 && game.physics.arcade.distanceBetween(tile, player.sprite) > 240) {
    tile.tint = 0x000000;
  }
});

itemGroup.forEach(function (tile) {
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 100) {
    tile.tint = 0xffffff;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 110 && game.physics.arcade.distanceBetween(tile, player.sprite) > 100) {
    tile.tint = 0xeeeeee;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 120 && game.physics.arcade.distanceBetween(tile, player.sprite) > 110) {
    tile.tint = 0xdddddd;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 130 && game.physics.arcade.distanceBetween(tile, player.sprite) > 120) {
    tile.tint = 0xcccccc;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 140 && game.physics.arcade.distanceBetween(tile, player.sprite) > 130) {
    tile.tint = 0xbbbbbb;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 150 && game.physics.arcade.distanceBetween(tile, player.sprite) > 140) {
    tile.tint = 0xaaaaaa;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 160 && game.physics.arcade.distanceBetween(tile, player.sprite) > 150) {
    tile.tint = 0x999999;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 170 && game.physics.arcade.distanceBetween(tile, player.sprite) > 160) {
    tile.tint = 0x888888;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 180 && game.physics.arcade.distanceBetween(tile, player.sprite) > 170) {
    tile.tint = 0x777777;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 190 && game.physics.arcade.distanceBetween(tile, player.sprite) > 180) {
    tile.tint = 0x666666;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 200 && game.physics.arcade.distanceBetween(tile, player.sprite) > 190) {
    tile.tint = 0x555555;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 210 && game.physics.arcade.distanceBetween(tile, player.sprite) > 200) {
    tile.tint = 0x444444;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 220 && game.physics.arcade.distanceBetween(tile, player.sprite) > 210) {
    tile.tint = 0x333333;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 230 && game.physics.arcade.distanceBetween(tile, player.sprite) > 220) {
    tile.tint = 0x222222;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 240 && game.physics.arcade.distanceBetween(tile, player.sprite) > 230) {
    tile.tint = 0x111111;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 250 && game.physics.arcade.distanceBetween(tile, player.sprite) > 240) {
    tile.tint = 0x000000;
  }
});

wallGroup.forEach(function (tile) {
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 100) {
    tile.tint = 0xffffff;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 110 && game.physics.arcade.distanceBetween(tile, player.sprite) > 100) {
    tile.tint = 0xeeeeee;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 120 && game.physics.arcade.distanceBetween(tile, player.sprite) > 110) {
    tile.tint = 0xdddddd;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 130 && game.physics.arcade.distanceBetween(tile, player.sprite) > 120) {
    tile.tint = 0xcccccc;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 140 && game.physics.arcade.distanceBetween(tile, player.sprite) > 130) {
    tile.tint = 0xbbbbbb;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 150 && game.physics.arcade.distanceBetween(tile, player.sprite) > 140) {
    tile.tint = 0xaaaaaa;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 160 && game.physics.arcade.distanceBetween(tile, player.sprite) > 150) {
    tile.tint = 0x999999;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 170 && game.physics.arcade.distanceBetween(tile, player.sprite) > 160) {
    tile.tint = 0x888888;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 180 && game.physics.arcade.distanceBetween(tile, player.sprite) > 170) {
    tile.tint = 0x777777;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 190 && game.physics.arcade.distanceBetween(tile, player.sprite) > 180) {
    tile.tint = 0x666666;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 200 && game.physics.arcade.distanceBetween(tile, player.sprite) > 190) {
    tile.tint = 0x555555;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 210 && game.physics.arcade.distanceBetween(tile, player.sprite) > 200) {
    tile.tint = 0x444444;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 220 && game.physics.arcade.distanceBetween(tile, player.sprite) > 210) {
    tile.tint = 0x333333;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 230 && game.physics.arcade.distanceBetween(tile, player.sprite) > 220) {
    tile.tint = 0x222222;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 240 && game.physics.arcade.distanceBetween(tile, player.sprite) > 230) {
    tile.tint = 0x111111;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 250 && game.physics.arcade.distanceBetween(tile, player.sprite) > 240) {
    tile.tint = 0x000000;
  }
});

enemyGroup.forEach(function (tile) {
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 100) {
    tile.tint = 0xffffff;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 110 && game.physics.arcade.distanceBetween(tile, player.sprite) > 100) {
    tile.tint = 0xeeeeee;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 120 && game.physics.arcade.distanceBetween(tile, player.sprite) > 110) {
    tile.tint = 0xdddddd;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 130 && game.physics.arcade.distanceBetween(tile, player.sprite) > 120) {
    tile.tint = 0xcccccc;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 140 && game.physics.arcade.distanceBetween(tile, player.sprite) > 130) {
    tile.tint = 0xbbbbbb;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 150 && game.physics.arcade.distanceBetween(tile, player.sprite) > 140) {
    tile.tint = 0xaaaaaa;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 160 && game.physics.arcade.distanceBetween(tile, player.sprite) > 150) {
    tile.tint = 0x999999;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 170 && game.physics.arcade.distanceBetween(tile, player.sprite) > 160) {
    tile.tint = 0x888888;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 180 && game.physics.arcade.distanceBetween(tile, player.sprite) > 170) {
    tile.tint = 0x777777;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 190 && game.physics.arcade.distanceBetween(tile, player.sprite) > 180) {
    tile.tint = 0x666666;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 200 && game.physics.arcade.distanceBetween(tile, player.sprite) > 190) {
    tile.tint = 0x555555;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 210 && game.physics.arcade.distanceBetween(tile, player.sprite) > 200) {
    tile.tint = 0x444444;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 220 && game.physics.arcade.distanceBetween(tile, player.sprite) > 210) {
    tile.tint = 0x333333;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 230 && game.physics.arcade.distanceBetween(tile, player.sprite) > 220) {
    tile.tint = 0x222222;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 240 && game.physics.arcade.distanceBetween(tile, player.sprite) > 230) {
    tile.tint = 0x111111;
  }
  if (game.physics.arcade.distanceBetween(tile, player.sprite) < 250 && game.physics.arcade.distanceBetween(tile, player.sprite) > 240) {
    tile.tint = 0x000000;
  }
});

};
