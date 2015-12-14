
var loadAll = function() {
  game.load.image('woodTile', 'assets/tiles/wood-floor-tile.png');
  game.load.image('emptyTile', 'assets/tiles/empty-tile.png');
  game.load.image('hudFrame', 'assets/hud/hud-frame.png');
  game.load.image('sideTable', 'assets/furniture/side-table.png');
  game.load.image('emptySquare', 'assets/tiles/empty-square.png');
  game.load.image('inventoryMenu', 'assets/hud/inventory-frame.png');

  game.load.spritesheet('testingPlayer', 'assets/investigator_new.png', 40, 70);

  // game.load.spritesheet('player', 'assets/investigator.png', 70, 70);
  // game.load.spritesheet('debugTile', 'assets/tiles/debug_tiles.png', 100, 50);
  game.load.spritesheet('necklace', 'assets/items/necklace.png', 35, 35);
  game.load.spritesheet('key', 'assets/items/key.png', 35, 35);
  game.load.spritesheet('wall', 'assets/furniture/wall.png', 100, 150);
};
