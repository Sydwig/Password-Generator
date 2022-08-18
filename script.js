// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var newpass = parseInt(prompt("How long do you want your password to be? (8-128)"));
  if(!newpass || newpass < 8 || newpass > 128) {
    alert("Recquires a number between 8 and 128");
    return;
  }
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var special = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
  var possible = '';
  var password = '';
  var character = newpass;
  var hasUpper = confirm("Include uppercase letters?");
  var hasLower = confirm("Include lowercase letters?");
  var hasNumber = confirm("Include numbers?");
  var hasSpecial = confirm("Include special characters?");
  if (hasUpper) {
    possible += upper;
  }
  if (hasLower) {
    possible += lower;
  }
  if (hasNumber) {
    possible += numbers;
  }
  if (hasSpecial) {
    possible += special;
  }
  for (var i = 0; i < character; i++) {
    var random = Math.floor(Math.random() * possible.length);
    console.log(random);
    password += possible[random];
  }
  console.log (password);
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (typeof password === 'undefined') {
    password = "";
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);