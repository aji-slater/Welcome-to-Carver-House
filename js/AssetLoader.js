
var loadAll = function() {
  game.load.image('lovecraft_mansion', 'assets/lovecraft2.png');
  game.load.image('preload_bar', 'assets/preload_bar.png');
  game.load.bitmapFont('MORPHEUS', 'assets/fonts/morpheus/MORPHEUS.png', 'assets/fonts/morpheus/MORPHEUS.xml');
  game.load.audio('Evelyn', ['assets/audio/Evelyn.mp3']);
  game.load.spritesheet('story', 'assets/buttons/story.png', 245, 84);
  game.load.spritesheet('newgame', 'assets/buttons/newgame.png', 245, 84);
  game.load.spritesheet('mainmenu', 'assets/buttons/mainmenu.png', 245, 84);
  game.load.spritesheet('back', 'assets/buttons/back.png', 245, 84);
  game.load.image('gameover', 'assets/border.png');
  game.load.image('storystate', 'assets/story.png');
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
  game.load.image('exit-north-unlock', 'assets/tiles/exit-north-unlock.png');
  game.load.image('exit-west-unlock', 'assets/tiles/exit-west-unlock.png');
  game.load.image('northWall', 'assets/furniture/wall-n.png');
  game.load.image('invExit', 'assets/hud/inventory-exit.png');

  // game.load.spritesheet('player','assets/investigator_2.png', 70, 70);
  game.load.spritesheet('westWall', 'assets/furniture/wall-w.png', 100, 150);
  game.load.spritesheet('debugTile', 'assets/tiles/debug_tiles.png', 100, 50);
  game.load.image('inventoryMenu', 'assets/hud/inventory-frame.png');
  game.load.image('popup_text', 'assets/text_popups/test-popup.png', 750, 250);
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
  game.load.spritesheet('Book', 'assets/items/book.png', 60, 60);
  game.load.spritesheet('Coin', 'assets/items/coins.png', 60, 60);
  game.load.spritesheet('CrystalBall', 'assets/items/crystalball.png', 60, 60);
  game.load.spritesheet('Dice', 'assets/items/die.png', 60, 60);
  game.load.spritesheet('Voodoo', 'assets/items/doll.png', 60, 60);
  game.load.spritesheet('Idol', 'assets/items/idol.png', 60, 60);
  game.load.spritesheet('Key', 'assets/items/key.png', 60, 60);
  game.load.spritesheet('MusicBox', 'assets/items/musicBox.png', 60, 60);
  game.load.spritesheet('Necklace', 'assets/items/necklace.png', 60, 60);
  game.load.spritesheet('PuzzleBox', 'assets/items/puzzleBox.png', 60, 60);
  game.load.spritesheet('Rings', 'assets/items/rings.png', 60, 60);
  game.load.spritesheet('Skull', 'assets/items/skull.png', 60, 60);
  game.load.spritesheet('Needle', 'assets/items/syringe.png', 60, 60);


  game.load.spritesheet('player', 'assets/investigator_new.png', 40, 70);

  // game.load.spritesheet('debugTile', 'assets/tiles/debug_tiles.png', 100, 50);
  game.load.spritesheet('wall', 'assets/furniture/wall.png', 100, 150);
  game.load.spritesheet('characterAnim','assets/characterAnim.png', 70, 74);
  game.load.spritesheet('peculiar_gentleman','assets/peculiar_gentleman.png', 75, 75);
  game.load.spritesheet('priestess','assets/priestess.png', 70, 70);
  game.load.spritesheet('scarecrow','assets/scarecrow.png', 70, 70);
  // game.load.spritesheet('kill', 'assets/perish_investigator.png', 123, 86);
};
