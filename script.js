// Assignment code here
var characters = 8;
var array = [];

var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","y","Z"];
var lower= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var specials=["!","@","#","$","*","$","&","_","?"];
var numbers=["1","2","3","4","5","6","7","8","9","0"];


// Write password to the #password input

function generatePassword() {
  array = [];

  characters = parseInt(prompt("How many characters would you like your password to have? (8 - 128 characters"));

  if(isNaN(characters) || characters < 8 || characters > 128) {
    alert("Password has not met the requrirements, please try again");
    return "Incorrect amount";
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
  let password = " ";
  if(array.length>0){
    for(let i=0;i<characters;i++){
      var random = Math.floor(Math.random() * array.length);
      password += array[random];
    }
  } else {
    password = "None"
    console.log(password)
  }
  return password;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write password to the #passwd input
function writePassword() {
 var password = generatePassword();

 var passwordText=document.querySelector("#password");

 passwordText.value = password;
} 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);