var Game = require('../library/game.js');
var assert=require('chai').assert;
var sinon = require('sinon');


describe('Game',function(){
  describe('tile',function(){
    describe('should return the matched tiles if the neighbour cell\'s coins are same',function(){
      it('vertical match',function(){
        var game = new Game(2);
        game.addPlayer('a');
        game.addPlayer('b');
        var coin1 = {colour:'green'}
        var coin2 = {colour:'green'}
        var coin3 = {colour:'green'}
        var tileId1 = 1,tileId2 = 4,tileId3 = 7;
        game.placeCoin(coin1,tileId1);
        game.placeCoin(coin3,tileId3);
        game.placeCoin(coin2,tileId2);
        assert.deepEqual(game.matched(),[1,4,7]);
      });
      it('horizontal match',function(){
        var game = new Game(2);
        game.addPlayer('a');
        game.addPlayer('b');
        var coin1 = {colour:'green'}
        var coin2 = {colour:'green'}
        var coin3 = {colour:'green'}
        var tileId1 = 4,tileId2 = 5,tileId3 = 6;
        game.placeCoin(coin1,tileId1);
        game.placeCoin(coin3,tileId3);
        game.placeCoin(coin2,tileId2);
        assert.deepEqual(game.matched(),[4,5,6]);
      });
      it('slant right match',function(){
        var game = new Game(2);
        game.addPlayer('a');
        game.addPlayer('b');
        var coin1 = {colour:'green'}
        var coin2 = {colour:'green'}
        var coin3 = {colour:'green'}
        var tileId1 = 3,tileId2 = 5,tileId3 = 7;
        game.placeCoin(coin1,tileId1);
        game.placeCoin(coin3,tileId3);
        game.placeCoin(coin2,tileId2);
        assert.deepEqual(game.matched(),[3,5,7]);
      });
      it('slant left match',function(){
        var game = new Game(2);
        game.addPlayer('a');
        game.addPlayer('b');
        var coin1 = {colour:'green'}
        var coin2 = {colour:'green'}
        var coin3 = {colour:'green'}
        var tileId1 = 1,tileId2 = 5,tileId3 = 9;
        game.placeCoin(coin1,tileId1);
        game.placeCoin(coin3,tileId3);
        game.placeCoin(coin2,tileId2);
        assert.deepEqual(game.matched(),[1,5,9]);
      });
    });
  });
});
