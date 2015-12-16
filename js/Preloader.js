BasicGame.Preloader = function (game) {
	this.backgroundImage = null;
	this.preloadBar = null;
	this.ready = false;
};

BasicGame.Preloader.prototype = {

	preload: function() {
		this.stage.backgroundColor = '#333333';

		this.backgroundImage = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'lovecraft_mansion');
		this.backgroundImage.anchor.setTo(0.5);

		this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 228, 'preload_bar');
		this.preloadBar.anchor.setTo(0.5);

	},

	create: function() {
		this.load.setPreloadSprite(this.preloadBar);
		// this.preloadBar.cropEnabled = false;
	},


	update: function() {
		if (this.ready == false) {
		this.ready = true;
		this.state.start('MainMenu');
		}
	}
};
