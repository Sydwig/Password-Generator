// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var special = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
  var possible = '';
  var password = '';

  var character = 8;

  var hasUpper = confirm("Include uppsercase letters?");
  var hasLower = confirm("Include lowercase letters?");
  var hasNumber = confirm("Include numbers?");
  var hasSpecial = confirm("Include special characters?");

  if(hasUpper) {
    possible += upper;
  }
  if(hasLower) {
    possible += lower;
  }
  if(hasNumber) {
    possible += numbers;
  }
  if(hasSpecial) {
    possible += special;
  }
  

  for (var i = 0; i < character; i++) {
    var random = Math.floor(Math.random() * possible.length);
    console.log(random);
    password += possible[random];
  }

  return '';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
