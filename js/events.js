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
  $('#typing').on('keydown',(e)=>{
    e = e.key;
    if(e === "g"){
      alert('You pressed g letter!!')
      return;
    }
  })
}

$(document).ready(function(){

// call functions here

getIt();
frameIt();
});
