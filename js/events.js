//define functions here
function getIt() {
  $('p').on('click', function(event) {
      alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('form').on('keydown', function() {
    
  })
}



$(document).ready(function(){

// call functions here

getIt();

frameIt();

submitIt();


});
