var tile = function(id){
  this.id = id.toString();
  this._coin = null;
}

tile.prototype = {
  placeCoin:function(coin){
    if(this._coin)
      return;
    this._coin = coin;
    return true;
  }
}

module.exports = tile;
