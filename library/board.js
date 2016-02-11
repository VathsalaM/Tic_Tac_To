var ld = require('lodash');
var Tile = require('./tile.js');

var board = function(){
  var tiles = [];
  for (var i = 1; i <= 9; i++) {
    tiles.push(new Tile(i));
  }
  this.tiles = tiles;
}

board.prototype = {
  selectTileById:function(x){
    return this.tiles[x-1];
  }
}

module.exports = board;
