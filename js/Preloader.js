BasicGame.Preloader = function (game) {
	// this.background = null;
	this.preloadBar = null;

	this.ready = false;
};

BasicGame.Preloader.prototype = {

	preload: function() {
		// this.background = this.add.sprite(0, 0, 'lovecraft_mansion');
		sprite = this.add.sprite(0, 0, 'lovecraft_mansion');

		var style = { font: "67px Morpheus", fill: "#ffffff", wordWrap: true, wordWrapWidth: sprite.width, align: "center" };

	    text = this.add.text(400, 100, "Welcome to Carver House", style);
	    text.anchor.set(0.5);

		this.preloadBar = this.add.sprite(300, 400, 'preload_bar');
		this.load.setPreloadSprite(this.preloadBar);
	},

	create: function() {
		this.preloadBar.cropEnabled = false;
	},


	update: function() {
		this.ready = true;
		// if (this.ready == false) {
		// 	this.state.start('MainMenu');
		// }
	}
};