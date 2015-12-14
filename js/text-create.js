// text = new text

var displayText = function(){
    text = game.add.text(
      game.world.centerX,
      game.world.height/5,
      "hello",
      {
        font: "65px Arial",
        size: "32px",
        fill: "#000000"
      });
    text.anchor.set(ANCHOR_SET)
  }

