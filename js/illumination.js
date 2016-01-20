
Phaser.Game.prototype.illuminate = function() {
  var groups = [floorGroup, itemGroup, furnishGroup, wallGroup, enemyGroup, exitGroup];
  var brightValues = [0xffffff, 0xeeeeee, 0xdddddd, 0xcccccc, 0xbbbbbb, 0xaaaaaa, 0x999999, 0x888888, 0x777777, 0x666666, 0x555555, 0x444444, 0x333333, 0x222222, 0x111111, 0x000000];
  var lumens = [0, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250];
  var el;
  var dist;
  var il;

  for ( var ig = groups.length-1; ig >= 0; ig--){
    for ( var ie = groups[ig].length-1; ie >= 0; ie--){
      el = groups[ig].children[ie];
      dist = game.physics.arcade.distanceBetween(el, player.sprite);
      for ( il = lumens.length-1; il >= 1; il-- ){
        if ( dist > 250 ) {
          il = 15;
          break;
        } else if ( dist > lumens[il-1] && dist <= lumens[il] ) {
          break;
        }
      }
      el.tint = brightValues[il];
    }
  }
};
