function pauseGame() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    /*
        Code for the pause menu
    */

    // Create a label to use as a button
    pause_label = this.game.add.text(80, 5, 'Pause', { font: '24px Arial', fill: '#fff' });
    pause_label.fixedToCamera = true;
    pause_label.inputEnabled = true;
    pause_label.events.onInputDown.add(function () {
        // When the pause button is pressed, we pause the game
        this.game.paused = true;

        // Then add the menu
        menu = this.game.add.sprite(width/2, height/2, 'menu');
        menu.anchor.setTo(0.5, 0.5);

        // And a label to illustrate which menu item was chosen. (This is not necessary)
        chooseLabel = this.game.add.text(width/2, height-150, 'Click outside menu to continue', { font: '30px Arial', fill: '#fff' });
        chooseLabel.anchor.setTo(0.5, 0.5);
    });

    // Add a input listener that can help us return from being paused
    this.game.input.onDown.add(unPause, self);

    // And finally the method that handels the pause menu
    function unPause(event){
        // Only act if paused
        if(this.game.paused){
            // Calculate the corners of the menu
            var x1 = width/2 - 600/2, x2 = width/2 + 600/2,
                y1 = height/2 - 400/2, y2 = height/2 + 400/2;

            // Check if the click was inside the menu
            if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
                // The choicemap is an array that will help us see which item was clicked
                var choosemap = ['one', 'two', 'three', 'four', 'five', 'six'];

                // Get menu local coordinates for the click
                var x = event.x - x1,
                    y = event.y - y1;

                // Calculate the choice
                var choose = Math.floor(x / 90) + 3*Math.floor(y / 90);

                // Display the choice
                chooseLabel.text = 'You chose menu item: ' + choosemap[choose];
            }
            else{
                // Remove the menu and the label
                menu.destroy();
                chooseLabel.destroy();

                // Unpause the game
                this.game.paused = false;
            }
        }
    }
}
