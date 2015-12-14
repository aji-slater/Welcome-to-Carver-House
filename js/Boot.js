var BasicGame = function(game) { };
BasicGame.Boot = function(game) { };

BasicGame.Boot.prototype = {
	init: function() {
		game.input.maxPointers = 1;
		game.stage.disableVisibilityChange = true;

		if(game.device.desktop){
			game.scale.pageAlignHorizontally = true;
		} else {
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.setMinMax(480, 260, 1024, 768);
            game.scale.forceLandscape = true;
            game.scale.pageAlignHorizontally = true;
		}
	},

	preload: function() {
		game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
        game.plugins.add(new Phaser.Plugin.Isometric(game));
		game.load.image('lovecraft_mansion', 'assets/lovecraft_mansion.png');
		game.load.image('preload_bar', 'assets/preload_bar.png');
		game.load.image('woodTile', 'assets/tiles/wood-floor-tile.png');
  		// game.load.image('necklace', 'assets/tiles/wood-floor-tile.png');
  		game.load.spritesheet('player', 'assets/figure.png', 50, 50);
  		game.load.spritesheet('debugTile', 'assets/tiles/debug_tiles.png', 100, 50);
  		game.load.image('emptyTile', 'assets/tiles/empty-tile.png');
	},

	create: function() {

		this.state.start('Preloader');
	}
};