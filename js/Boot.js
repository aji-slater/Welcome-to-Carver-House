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
		this.load.image('lovecraft_mansion', 'assets/lovecraft_mansion.png');
		this.load.image('preload_bar', 'assets/preload_bar.png');
	},

	create: function() {

		this.state.start('Preloader');
	// sprite = this.add.sprite(0, 0, 'lovecraft_mansion');

 //    var style = { font: "67px Morpheus", fill: "#ffffff", wordWrap: true, wordWrapWidth: sprite.width, align: "center" };

 //    text = this.add.text(400, 100, "Welcome to Carver House", style);
 //    text.anchor.set(0.5);
	}
};