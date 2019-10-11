//Business logic 
var users =[];
function Person(fname, lname,uname, email,password, pass2,){ //single user constructor 
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
    var lname = $("input#lastName").val();
    var uname = $("input#userName").val();
    var email = $("input#email").val();
    var password = $("input#password").val();
    var pass2 = $("input#pswRepeat").val();
   
    if(password !== pass2){
      alert("passwords do not match");
    } else{
    var user = new Person(fname, lname, uname, email, password, pass2);
    users.push(user);

    alert("Account successfully created!\nWelcome onboard  " + fname);
  }  
  });

  //Retrieve credentials for signin
  
  
  
});//end of document.get.ready function
