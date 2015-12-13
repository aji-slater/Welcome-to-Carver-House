BasicGame.Preloader = function (game) {
	// this.background = null;
	this.preloadBar = null;

	this.ready = false;
};

BasicGame.Preloader.prototype = {

	preload: function() {
		// this.background = this.add.sprite(0, 0, 'lovecraft_mansion');
		sprite = this.add.sprite(0, 0, 'lovecraft_mansion');
		this.preloadBar = this.add.sprite(300, 400, 'preload_bar');

		var style = { font: "67px Morpheus", fill: "#ffffff", wordWrap: true, wordWrapWidth: sprite.width, align: "center" };

	    text = this.add.text(400, 100, "Welcome to Carver House", style);
	    text.anchor.set(0.5);
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