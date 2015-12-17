BasicGame.MainMenu = function(game) {
	this.backgroundImage = null;
	this.music = null;
	this.playButton = null;
	this.storyButton = null;
	this.soundButton = null;
};

BasicGame.MainMenu.prototype = {

	create: function () {
    	// this.time.events.add(Phaser.Timer.SECOND * 20, this.transition, this);
		this.music = this.add.audio('Evelyn');
		this.music.loop = true;
		this.music.play();

		this.backgroundImage = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'lovecraft_mansion');
		this.backgroundImage.anchor.setTo(0.5);

		var style = { font: "99px MORPHEUS", fill: "#ffffff", wordWrap: true, wordWrapWidth: this.backgroundImage.width, align: "center" };
		text = this.add.text(this.game.world.centerX, this.game.world.centerY -128, "Welcome to Carver House", style);
		text.anchor.setTo(0.5);

		this.playButton = this.add.button(this.game.world.centerX -140, this.game.world.centerY +70, 'newgame', this.startGame, this, 1, 0, 2);
		this.playButton.anchor.setTo(0.5);

		this.storyButton = this.add.button(this.game.world.centerX +140, this.game.world.centerY +70, 'story', this.readStory, this, 1, 0, 2);
		this.storyButton.anchor.setTo(0.5);

		this.soundButton = this.add.button(this.game.world.centerX -630, this.game.world.centerY +380, 'volume-glyph', this.stopMusic, this);
		this.soundButton.anchor.setTo(0.5);
  	},

	update: function () {
	},

	transition: function() {
  	},

  	readStory: function (pointer) {
  		this.music.stop();
		this.state.start('Story');
	},

	startGame: function (pointer) {
		this.music.stop();
		this.state.start('Game');
	},

	stopMusic: function (pointer) {
		this.world.remove(this.soundButton);
		this.soundButton = this.add.button(this.game.world.centerX -630, this.game.world.centerY +380, 'stop-volume-glyph');
		this.soundButton.anchor.setTo(0.5);
		this.music.stop();
	}
}