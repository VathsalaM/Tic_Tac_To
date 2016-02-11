var Tile = require('../library/tile.js');
var assert=require('chai').assert;
var sinon = require('sinon');

describe("Tile",function(){
  describe('placeCoin',function(){
    it('should place a given coin',function(){
      var tile = new Tile(1);
      var coin = {};
      assert.ok(tile._coin==null);
      tile.placeCoin(coin);
      assert.ok(tile._coin!=null);
    });
  });
})
