BasicGame.Preloader = function (game) {
	this.backgroundImage = null;
	this.preloadBar = null;
	this.ready = false;
};

BasicGame.Preloader.prototype = {

	preload: function() {

	},

	create: function() {
		this.stage.backgroundColor = '#ffffff';
		this.loadingHouse = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 50, 'loadingHouse');
		this.loadingText = this.add.sprite(this.game.world.centerX, this.game.world.centerY+200, 'loadingText');
		this.loadingHouse.scale.setTo(0.6);
		this.loadingHouse.anchor.setTo(0.5);
		this.loadingText.anchor.setTo(0.5);

		text = game.add.text(32, 32, 'Load', { fill: "#ffffff"});
		this.start();
		game.load.onLoadStart.add(this.loadStart, this);
		game.load.onFileComplete.add(this.fileComplete, this);
		game.load.onLoadComplete.add(this.loadComplete, this);
	},

	loadStart: function(){

	},

	fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles){
		text.setText("Percent Complete: " + progress + "%");
	},

	loadComplete: function(){
		this.state.start('MainMenu');
	},

	start: function(){
		loadAll();
		game.load.start();

	}

};
