var main =  function(id){
  $.post('place',{id:id},function(callback){
      console.log('.......',callback.x.symbol);
      $('#'+id).html(callback.x.symbol);
  });
}

var getUpdate = function(){
  $.get('update',function(data){
    var update = JSON.parse(data);
    console.log('==================',update);
    var name  = document.cookie.split('=')[1];
    if(update.player.name != name ){
      $('#table').css('pointer-events','none');
    }
    else {
      $('#table').css('pointer-events','auto');
    }
  });
};
