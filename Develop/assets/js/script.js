// Assignment code here
var chars = "";
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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

  // If user inputs a 'letter' instead of a 'number', then prompt ends.
  if (Number.isNaN(passwLength)) {
    alert("Only numbers are allowed for password length.");
    return null;
  }
  
  // If user inputs number of characters below 8, then promt ends.
  if (passwLength < 8) {
    alert("Password must be at least 8 characters.");
    return null;
  }

  // If user inputs number of characters above 128, then promt ends.
  if (passwLength > 128) {
    alert("Password must be under 128 characters.");
    return null;
  }

  // If user doesn't select any of the options
  if (numberss === false && lowCases === false && uppCases === false && specialChars === false){
    alert("Bruuuh...");
    return null;
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
