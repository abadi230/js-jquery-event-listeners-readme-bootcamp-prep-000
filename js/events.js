//define functions here

function getIt(){
  $('p').on('click', function(e){
    
    return alert('Hey');
  })
}

function frameIt(){
  $('img').on('load',function(){
    src = 'css/style.css'
  })
}

$(document).ready(function(){

// call functions here

getIt();

});
