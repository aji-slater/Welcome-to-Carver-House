BasicGame.GameOver = function (game) {
	this.over = null;
	this.newButton = null;
	this.mainMenu = null;
};

BasicGame.GameOver.prototype = {

	preload: function() {


	},
	create: function () {

		this.over = this.add.sprite(window.innerWidth/2, window.innerHeight/2, 'gameover');
		this.over.anchor.setTo(0.5);

		this.music = this.add.audio('Evelyn');
		this.music.play();

		var style = { font: "99px MORPHEUS", fill: "#ffffff", wordWrap: true, wordWrapWidth: this.over.width, align: "center" };
		text = this.add.text(this.game.world.centerX, this.game.world.centerY -128, "Game Over", style);
		text.anchor.setTo(0.5);

		this.playButton = this.add.button(this.game.world.centerX -140, this.game.world.centerY +80, 'newgame', this.newGame, this, 1, 0, 2);
		this.playButton.anchor.setTo(0.5);

		this.mainMenu = this.add.button(this.game.world.centerX +140, this.game.world.centerY +80, 'story', this.mainMenu, this, 1, 0, 2);
		this.mainMenu.anchor.setTo(0.5);
  	},

	update: function () {
	},

	transition : function() {
  	},


	newGame: function (pointer) {
		this.music.stop();
		this.state.start('Game');

	},
  	mainMenu: function (pointer) {
    	this.state.start("MainMenu");
	}
}