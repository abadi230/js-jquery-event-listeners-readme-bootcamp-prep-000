//define functions here

function getIt(){
  $('p').on('click', (e)=>{
    
    return alert('Hey');
  })
}

function frameIt(){
  $('img').on('load',()=>{
     $('img').css('border-color','red');
  })
}

$(document).ready(function(){

// call functions here

getIt();
frameIt();
});
