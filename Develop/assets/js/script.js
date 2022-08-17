// Assignment code here
var chars = "";
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "~", "`", "|", "?", "<", ">", ".", "/", "-", "="];
const generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt cards for button 
function generatePassword() {
  var passwLength = prompt("Enter the number of characters you want for your new password. Must be min. 8 & max. 128 characters long.");
  var numberss = confirm("Do you want numbers in your password?");
  var lowCases = confirm("Do you want lowercases in your password?");
  var uppCases = confirm("Do you want uppercases in your password?");
  var specialChars = confirm("Do you want special characters in your password?");

  // Min. and Max count for characters
  var minCount = 8;
  var maxCount = 128;

  if (numberss === false && lowCases === false && uppCases === false && specialChars === false){
    alert("Bruuuh...");
    var numberss = confirm("Do you want numbers in your password?");
    var lowCases = confirm("Do you want lowercases in your password?");
    var uppCases = confirm("Do you want uppercases in your password?");
    var specialChars = confirm("Do you want special characters in your password?");
  }
  //Generator
  var functionArray = []
    if (numberss) {
      functionArray = functionArray.concat(numbers);
    }
    
    if (lowCases) {
      functionArray = functionArray.concat(lowCase);
    }

    if (uppCases) {
      functionArray = functionArray.concat(uppCase);
    }

    if (specialChars) {
      functionArray = functionArray.concat(specialChar);
    }

  //Displayed password
  var randomPasswGen = "";
  //var newPassword = [];
  for (let i = 0; i < passwLength ; i++) {
    randomPasswGen = randomPasswGen + functionArray[Math.floor(Math.random() * functionArray.length)];

    //randomPasswGen += randomNumbPickd;
  }

  return randomPasswGen;
  
}
