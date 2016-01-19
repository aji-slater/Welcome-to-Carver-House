BasicGame.Preloader = function (game) {
	this.backgroundImage = null;
	this.preloadBar = null;
	this.ready = false;
};

BasicGame.Preloader.prototype = {

	preload: function() {
		this.stage.backgroundColor = '#ffffff';
		this.loadingHouse = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 50, 'loadingHouse');
		this.loadingText = this.add.sprite(this.game.world.centerX, this.game.world.centerY+200, 'loadingText')
		this.loadingHouse.scale.setTo(0.6);
		this.loadingHouse.anchor.setTo(0.5);


		loadAll();

	},

	create: function() {
		// this.state.start('MainMenu');
	},

};
