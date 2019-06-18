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
  $('#typing').on('keydown',(key)=>{
    
    if(key.which == 71){
      return alert('You pressed g letter!!')
      
    }
  })
}

function submitIt(){
  $('input').on("submit", ()=>{
    alert("Your form is going to be submitted now");
    return;
  })
}
$(document).ready(function(){

// call functions here

getIt();
frameIt();
pressIt();
submitIt();
});
