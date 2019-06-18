11//define functions here

function getIt(){
  $('p').on('click', (e)=>{
    
    return alert('Hey');
  })
}

function frameIt(){
  $('img').on('load',()=>{
    // return $('.tasty').append($('img'));
    // $('img').load('.tasty');
     $('img').addClass('tasty')
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
  $('form').on('submit', ()=>{
    if($("input:first").val() === 'g'){
       alert("Your form is going to be submitted now");
    } else{
      alert("you entered the wrong value");
      
    }
    
    
  })
}
$(document).ready(function(){

// call functions here

getIt();
frameIt();
pressIt();
submitIt();
});
