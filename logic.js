var count = 0;
var zero = [];
var one = [];
var two = [];
var x = ['X','0'];
var selected = 0;
var selector = function(ele){
	selected = 1;
	x = (ele=='x')?x:x.reverse();
}

var checkAvailability = function(id){
	if ($('#'+id).html() != '') {
		count--;
		return false;
	}
	return true;
}

var check = function(a,b,c){
	console.log(a,b,c);
	var ele = a || b || c || 'No data';
	console.log(ele)
	var array = [a,b,c]
	var result = array.filter(function(value){return value==ele;})
	return result.length==3;
}

var horizontalCheck = function(z,o,t){
	return check(z[0],z[1],z[2]) || check(o[0],o[1],o[2]) || check(t[0],t[1],t[2]);
}
var verticalCheck = function(z,o,t){
	return check(z[0],o[0],t[0]) || check(z[1],o[1],t[1]) || check(z[2],o[2],t[2]);
}
var diagonalCheck = function(z,o,t){
	return check(z[0],o[1],t[2]) || check(z[2],o[1],t[0]);
}
var main = function(id){
	if(selected==0)
		return;
	var mapping = {'0':zero,'1':one,'2':two}
	var newID = id.split('')
	var arrayChoice = mapping[newID[0]]
	var ele = x[(count%x.length)];
	count++;
	if(!checkAvailability(id))
		return;
	$('#'+id).html(ele);
	if(count>8){
		selected = 0;
		alert('Game Over')
		return;
	}
	arrayChoice[newID[1]]=ele;
	var result = horizontalCheck(zero,one,two) || verticalCheck(zero,one,two) || diagonalCheck(zero,one,two);
	if(result){
		alert('player '+ele+' wins');
		selected = 0;
		count = 10;
		return;
	}
}