var ld = require('lodash');
var Board = require('./board.js');
var Player = require('./player.js');

var game = function(){
  this._board = new Board();
  this.players = [];
  this.colours = ['green','pink'];
  this._lastPlaced = null;
}

game.prototype = {
  addPlayer:function(name,symbol){
    var numberOfPlayers = this.players.length;
    if(numberOfPlayers < 2){
      var player = new Player(name,symbol);
      this.players.push(player);
      return true;
    };
    return false;
  },
  getPlayer:function(name){
    var playerIndex = ld.findIndex(this.players, { 'name': name });
		return this.players[playerIndex];
  },
  findCurrentPlayer:function(){
		var currentPlayerIndex = ld.findIndex(this.players, { 'isMyTurn': true });
    console.log('==',currentPlayerIndex);
		return this.players[currentPlayerIndex];
	},
  checkAvailability:function(id){
    var tile = this.board.selectTileById(id);
    if(tile.length>0){
      return false;
    }
    return true;
  },
  changePlayerTurn:function(){
    var currentPlayerIndex = ld.findIndex(this.players, { 'isMyTurn': true });
    var currentPlayer = this.players[currentPlayerIndex];
    currentPlayer.isMyTurn = false;
    var nextPlayerIndex = (currentPlayerIndex<1)?currentPlayerIndex+1:0;
    var newPlayer =  this.players[nextPlayerIndex];
    newPlayer.isMyTurn = true;
  },
  placeCoin:function(coin,tileId){
    var tile = this._board.selectTileById(tileId);
    var result = tile.placeCoin(coin);
    if(result){
      coin.position = tileId;
      this._lastPlaced = tileId;
    }
  },
  findCoin : function(x){
    var tile = this._board.selectTileById(x)
    return (tile)?tile._coin:null;
  },
  lineMatch:function(a,b,c,m){
    var x = this.findCoin(a) && this.findCoin(b) && this.findCoin(c);
    return (x)?m:null;
  },
  matched:function(){
    var x = this._lastPlaced;
    var m = {m1:[x-1,x,x+1],m2:[x-2,x,x+2],m3:[x-3,x,x+3],m4:[x-4,x,x+4]}
    var currentTile = this._board.selectTileById(x);
    var m1 = this.lineMatch(x,x+1,x-1,'m1');
    var m2 = this.lineMatch(x,x+2,x-2,'m2')
    var m3 = this.lineMatch(x,x+3,x-3,'m3')
    var m4 = this.lineMatch(x,x+4,x-4,'m4')
    var r = m1 || m2 || m3 || m4;
    return m[r];
  }
}

module.exports = game;
