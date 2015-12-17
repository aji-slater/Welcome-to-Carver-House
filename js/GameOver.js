BasicGame.GameOver = function (game) {
	this.over = null;
	this.newButton = null;
	this.mainMenu = null;
};

BasicGame.GameOver.prototype = {

	preload: function() {
		this.over = this.add.sprite(window.innerWidth/2, window.innerHeight/2, 'gameover');
		this.over.anchor.setTo(0.5);

	},
	create: function () {
		var style = { font: "120px MORPHEUS", fill: "#ffffff", wordWrap: true, wordWrapWidth: this.over.width, align: "center" };
		text = this.add.text(window.innerWidth/2, window.innerHeight/2.7, "G a m e  O v e r", style);
		text.anchor.setTo(0.5);

		this.music = this.add.audio('Evelyn');
		this.music.play();

		this.newButton = this.add.button(window.innerWidth/2, window.innerHeight/1.6, 'newgame', this.newGame, this, 1, 0, 2);
		this.newButton.anchor.setTo(0.5);

		// this.mainMenu = this.add.button(window.innerWidth/2.5, window.innerHeight/1.6, 'mainmenu', this.mainMenu, this, 1, 0, 2);
		// this.mainMenu.anchor.setTo(0.5);

		playerAlive = true;
  	},

	update: function() {
	},

	transition : function() {
  	},


  	mainMenu: function (pointer) {
    	this.game.state.start('MainMenu');
	},
	newGame: function (pointer) {
		this.music.stop();
		this.game.state.clearCurrentState();
		this.game.state.start('Game', true, false);

	}
}