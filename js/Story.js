BasicGame.Story = function(game) {
	this.backgroundImage = null;
	this.backButton = null;
};

BasicGame.Story.prototype = {
	create: function () {
    	// this.time.events.add(Phaser.Timer.SECOND * 20, this.transition, this);

		this.backgroundImage = this.add.sprite(window.innerWidth/2, window.innerHeight/2, 'storystate');
		this.backgroundImage.anchor.setTo(0.5);

		this.backButton = this.add.button(window.innerWidth/1.3, window.innerHeight/1.3, 'back', this.mainMenu, this, 1, 0, 2);
		this.backButton.anchor.setTo(0.5);
  	},

	update: function () {
	},

	transition: function() {
  	},

	mainMenu: function (pointer) {
    	this.game.state.start('MainMenu');
	}
}