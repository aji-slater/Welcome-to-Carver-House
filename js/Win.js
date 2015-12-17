BasicGame.Win = function (game) {
	this.over = null;
	this.newButton = null;
	this.mainMenu = null;
};

BasicGame.Win.prototype = {

	preload: function() {
		this.over = this.add.sprite(window.innerWidth/2, window.innerHeight/2, 'gameover');
		this.over.anchor.setTo(0.5);

	},
	create: function () {
		var style = { font: "120px MORPHEUS", fill: "#ffffff", wordWrap: true, wordWrapWidth: this.over.width, align: "center" };
		text = this.add.text(window.innerWidth/2, window.innerHeight/2.7, "Y o u  W o n !", style);
		text.anchor.setTo(0.5);

		this.music = this.add.audio('Evelyn');
		this.music.play();

		this.newButton = this.add.button(window.innerWidth/1.7, window.innerHeight/1.5, 'newgame', this.newGame, this, 1, 0, 2);
		this.newButton.anchor.setTo(0.5);

		this.mainMenu = this.add.button(window.innerWidth/2.5, window.innerHeight/1.5, 'mainmenu', this.mainMenu, this, 1, 0, 2);
		this.mainMenu.anchor.setTo(0.5);
  	},

	update: function () {
	},

	transition : function() {
  	},


  	mainMenu: function (pointer) {
  		game.world.removeAll();
  		// this.game.state.clearCurrentState();
  		// game.state.add('MainMenu', BasicGame.MainMenu);
    	this.state.start('MainMenu');
	},
	newGame: function (pointer) {
		this.music.stop();
		this.state.start('Game', true, false);

	}
}