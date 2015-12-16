
var loadAll = function() {
  game.load.image('lovecraft_mansion', 'assets/welcome.png');
  game.load.image('preload_bar', 'assets/preload_bar.png');
  // game.load.spritesheet('timer', 'assets/timer.png', 150, 20);
  game.load.bitmapFont('MORPHEUS', 'assets/fonts/morpheus/MORPHEUS.png', 'assets/fonts/morpheus/MORPHEUS.xml');
  game.load.audio('Evelyn', ['assets/audio/Evelyn.mp3']);
  game.load.spritesheet('story', 'assets/buttons/story.png', 245, 84);
  game.load.spritesheet('newgame', 'assets/buttons/newgame.png', 245, 84);
  game.load.image('gameover', 'assets/over.png');
  game.load.image('volume-glyph', 'assets/buttons/volume-glyph.png');
  game.load.image('stop-volume-glyph', 'assets/buttons/stop-volume-glyph.png');
  
  game.load.image('woodTile', 'assets/tiles/wood-floor.png');
  game.load.image('emptyTile', 'assets/tiles/empty-tile.png');
  game.load.image('hudFrame', 'assets/hud/hud-frame.png');
  game.load.image('sideTable', 'assets/furniture/side-table.png');
  game.load.image('emptySquare', 'assets/tiles/empty-square.png');
  game.load.image('hudInvButton', 'assets/HUD/inventory-icon.png');
  game.load.image('exit-north', 'assets/tiles/exit-north.png');
  game.load.image('exit-west', 'assets/tiles/exit-west.png');
  game.load.image('northWall', 'assets/furniture/wall-n.png');
  game.load.image('invExit', 'assets/hud/inventory-exit.png');

  // game.load.spritesheet('player','assets/investigator_2.png', 70, 70);
  game.load.spritesheet('westWall', 'assets/furniture/wall-w.png', 100, 150);
  game.load.spritesheet('debugTile', 'assets/tiles/debug_tiles.png', 100, 50);
  game.load.image('inventoryMenu', 'assets/hud/inventory-frame.png');
  game.load.spritesheet('invSkull', 'assets/items/inv-skull.png', 100, 150);
  game.load.spritesheet('invBook', 'assets/items/inv-book.png', 100, 150);
  game.load.spritesheet('invCoin', 'assets/items/inv-coin.png', 100, 150);
  game.load.spritesheet('invCrystalBall', 'assets/items/inv-crystalball.png', 100, 150);
  game.load.spritesheet('invDice', 'assets/items/inv-dice.png', 100, 150);
  game.load.spritesheet('invIdol', 'assets/items/inv-idol.png', 100, 150);
  game.load.spritesheet('invKey', 'assets/items/inv-key.png', 100, 150);
  game.load.spritesheet('invMusicBox', 'assets/items/inv-musicbox.png', 100, 150);
  game.load.spritesheet('invNecklace', 'assets/items/inv-necklace.png', 100, 150);
  game.load.spritesheet('invNeedle', 'assets/items/inv-needle.png', 100, 150);
  game.load.spritesheet('invPuzzleBox', 'assets/items/inv-puzzlebox.png', 100, 150);
  game.load.spritesheet('invRings', 'assets/items/inv-rings.png', 100, 150);
  game.load.spritesheet('invSkull', 'assets/items/inv-skull.png', 100, 150);
  game.load.spritesheet('invVoodoo', 'assets/items/inv-voodoo.png', 100, 150);

  game.load.spritesheet('player', 'assets/investigator_new.png', 40, 70);

  // game.load.spritesheet('debugTile', 'assets/tiles/debug_tiles.png', 100, 50);
  game.load.spritesheet('necklace', 'assets/items/necklace.png', 35, 35);
  game.load.spritesheet('key', 'assets/items/key.png', 35, 35);
  game.load.spritesheet('wall', 'assets/furniture/wall.png', 100, 150);
  game.load.spritesheet('characterAnim','assets/characterAnim.png', 70, 74);
  game.load.spritesheet('badGuy','assets/peculiar_gentleman.png', 75, 75);
  // game.load.spritesheet('kill', 'assets/perish_investigator.png', 123, 86);
};
