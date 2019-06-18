11//define functions here

function getIt(){
  $('p').on('click', (e)=>{
    
    return alert('Hey');
  })
}

function frameIt(){
  $('img').on('load',()=>{
     $('img').append($('.tasty'));
  })
}

function pressIt(){
  $(document).on('keydown',function(key){
    
    if(key.which == 83){
      return alert('You pressed g letter!!')
      
    }
  })
}

$(document).ready(function(){

// call functions here

getIt();
frameIt();
});
