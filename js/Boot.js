var width = window.innerWidth;
var height = window.innerHeight;
var game = new Phaser.Game(width, height, Phaser.AUTO, 'gameContainer', null, true, false);

var BasicGame = function(game) { };
BasicGame.Boot = function(game) { };

BasicGame.Boot.prototype = {
	init: function() {
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = true;

		if(this.game.device.desktop){
			this.scale.pageAlignHorizontally = true;
		} else {
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 768);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
		}
	},

	preload: function() {
		this.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
        this.plugins.add(new Phaser.Plugin.Isometric(BasicGame));
		this.load.image('lovecraft_mansion', 'assets/lovecraft_mansion.png');
		this.load.image('preload_bar', 'assets/preload_bar.png');
		this.load.image('woodTile', 'assets/tiles/wood-floor-tile.png');
  		// this.load.image('necklace', 'assets/tiles/wood-floor-tile.png');
  		this.load.spritesheet('player', 'assets/figure.png', 50, 50);
  		this.load.spritesheet('debugTile', 'assets/tiles/debug_tiles.png', 100, 50);
  		this.load.image('emptyTile', 'assets/tiles/empty-tile.png');
	},

	create: function() {

		this.state.start('Preloader');
	},

	game.state.add('Boot', BasicGame.Boot);
    game.state.add('Preloader', BasicGame.Preloader);
    game.state.add('AssetLoader', BasicGame.AssetLoader);
    game.state.add('MainMenu', BasicGame.MainMenu);
    game.state.add('Game', BasicGame.Game);

    game.state.start('Boot');
};