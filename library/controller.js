var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var querystring = require('querystring');
var Game = require('./game.js');
var game = new Game();
var symbols = ['O','X'];
//
var loadUser = function(req,res,next){
	console.log('loadUser is called ')
	if(req.cookies.name)
		req.user = {name:req.cookies.name};
	next();
};

// var ensureLogin = function(req,res,next){
// 	// console.log('user:',req.user);
// 	if(req.user) next();
// 	else res.redirect('/index.html');
// };

var app = express();

app.get('/',function(req, res, next){
  req.url = '/index.html';
  next();
});
//
app.use(express.static('./public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.raw());
app.use(loadUser);
//
// // all gets............
// app.get('/ready',function(req, res){
//   var resString  = JSON.stringify({'ready': game.isReady()});
//   res.send(resString);
// });
//
// app.get('/update',function(req, res){
// 	var player = game.findCurrentPlayer();
//   var resData = {
// 		player : player
// 	};
// 	res.send(resData);
// 	res.end();
// });
//
// app.post('/register',function(req, res){
//   var success = false;
// 	 var name = req.body.name;
//   if(!game.isReady()){
//     game.addPlayer(name);
//     success = true;
//   }
// 	res.cookie('name',name);
//   res.end(JSON.stringify({'success': success}));
// });
app.post('/place',function(req,res){
	var id = req.body;
	var available = game.checkAvailability(id);
	var currentPlayer = game.findCurrentPlayer();
	console.log(available,currentPlayer);
	if(available){
		res.send({x:currentPlayer});
	}
	game.changePlayerTurn();
	res.end();
})

app.post('/board.html',function(req,res,next){
	// ensureLogin(req,res,next);
	var name = req.body.name;
	var flag = game.addPlayer(name,symbols[game.players.length]);
	game.players[0].isMyTurn = true;
	if(flag)
		res.redirect('/board.html');
	else
		res.send('sorry,game started');
	res.end();
})

app.game = game;

module.exports = app;
