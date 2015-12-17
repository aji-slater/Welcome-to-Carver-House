(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var BasicGame = function(game) { };
BasicGame.Boot = function(game) { };

BasicGame.Boot.prototype = {
	init: function() {
		game.input.maxPointers = 1;
		game.stage.disableVisibilityChange = true;

		if(game.device.desktop){
			game.scale.pageAlignHorizontally = true;
		} else {
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.stage.scale.setShowAll();
      	game.scale.setMinMax(480, 260, 1024, 768);
      	game.scale.forceLandscape = true;
      	game.scale.pageAlignHorizontally = true;
		}
	},

	preload: function() {
		game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
    	game.plugins.add(new Phaser.Plugin.Isometric(game));
		loadAll();
	},

	create: function() {

		this.state.start('Preloader');
	}
};


},{}]},{},[1]);
