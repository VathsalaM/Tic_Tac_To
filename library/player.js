var Coin = require('./coin.js')

var player = function(name,symbol){
  this.name = name;
  this.symbol = symbol;
  this.isMyTurn = false;
}

player.prototype = {
  createCoin:function(position){
    return new Coin(this.colour,position);
  }
}

module.exports = player;
