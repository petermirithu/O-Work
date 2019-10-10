$(document).ready(function() {
  setInterval(function() {
      $("#message").animate({width: '100%',height: '100%'}, 500);
      $("#message").animate({ width: '95%',height: '95%'}, 600); 
  },1000);    
});