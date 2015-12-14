
var loadAll = function() {
  game.load.image('woodTile', 'assets/tiles/wood-floor-tile.png');
  game.load.image('emptyTile', 'assets/tiles/empty-tile.png');
  game.load.image('hudFrame', 'assets/hud/hud-frame.png');
  game.load.image('sideTable', 'assets/furniture/side-table.png');

  game.load.spritesheet('player','assets/investigator.png', 70, 70);
  game.load.spritesheet('debugTile', 'assets/tiles/debug_tiles.png', 100, 50);
  game.load.spritesheet('necklace', 'assets/items/necklace.png', 35, 35);
  game.load.spritesheet('key', 'assets/items/key.png', 35, 35);
  game.load.spritesheet('wall', 'assets/furniture/wall.png', 100, 150);
  game.load.spritesheet('characterAnim','assets/characterAnim.png', 70, 74);
};
