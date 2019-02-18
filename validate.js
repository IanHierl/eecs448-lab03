var validate = function() {
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  if( pass1 != pass2 ) {
    alert("Passwords do not match!");
  } else if( pass1.length < 8 ) {
    alert("Password must be at least 8 characters long!");
  } else {
    return true;
  }
  return false;
}
