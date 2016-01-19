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
		game.load.image('loadingHouse', 'assets/outside-to-game/preloader.png');

		game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
    	game.plugins.add(new Phaser.Plugin.Isometric(game));

	},

	create: function() {

		this.state.start('Preloader');
	}

};
