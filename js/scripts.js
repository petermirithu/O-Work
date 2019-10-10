//Business logic 
function Person(fname, lname,uname, email,password, pass2,){
  this.fname = fname;
  this.lname= lname;
  this.uname = uname;
  this.email = email;
  this.password = password;
  this.pass2 = pass2;
}


// User interface logic
$(document).ready(function() {
  setInterval(function() {
      $("#message").animate({width: '100%',height: '100%'}, 500);
      $("#message").animate({ width: '95%',height: '95%'}, 600); 
  },1000);  
  
  //save user credentials on button of click
  $("form#sign-up").submit(function(event) {
    event.preventDefault();
    var fname = $("input#firstName").val();
    
    alert(fname);
  });
  
  
});//end of document.get.ready function
