//define functions here

function getIt(){
  $('p').on('click', function(e){
    
    return alert('Hey');
  })
}

function frameIt(){
  $('img').on('load',function(){
    $('.tasty');
  })
}

$(document).ready(function(){

// call functions here

getIt();
frameIt();
});
