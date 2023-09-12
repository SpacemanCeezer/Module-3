// Assignment code here
var characters = 8;
var array = [];

var specials = ['!','@','#','$','%','&','^','&','*'];

var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'];

var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Z'];

var numbers = ['1','2','3','4','5','6','7','8','9','0']

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var password = "";

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  password = generatePassword();
  passwordText.value = password
} 

function generatePassword() {
  password = "";
  for (var i = 0; i < characters.length; i++) { 
    var random = Math.floor(Math.random() * array.length);//for loop for the random character selection
      password += array[random];
  } 
  
    return password;
}

function prompts() {
  array = [];

  characters = parseInt(prompt("How many characters would you like your password to have? (8 - 128 characters"));

  if(isNaN(characters) || characters < 8 || characters > 128) {
    alert("Password has not met the requrirements, please try again");
    return false;
  }

  if(confirm("Should your password contain numbers?")) {
    array = array.concat(numbers);
  }

  if(confirm("Should your password contain lowercase letters?")) {
    array = array.concat(lower);
  }

  if(confirm("Should your password contain uppercase letters?")) {
    array = array.concat(upper);
  }

  if(confirm("Should your password contain special letters?")) {
    array = array.concat(specials);
  }
  return true;
}