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
  var minCount = 4;
  var maxCount = 128;

  // No minimum or maximum for characters
  var minLowCases = "";
  var minUppCases = "";
  var minSpecialChars = "";
  var minNumbers = "";

  var maxLowCases = "";
  var maxUppCases = "";
  var maxSpecialChars = "";
  var maxNumbers = ""; 

  //Generator
  var functionArray = {
    getNumbers: function() {
      return numbers[Math.floor(Math.random() * numbers.length)];
    },

    getUppCase: function() {
      return uppCase[Math.floor(Math.random() * uppCase.length)];
    },

    getLowCase: function() {
      return lowCase[Math.floor(Math.random() * lowCase.length)];
    },

    getSpecialChar: function(){
      return specialChar[Math.floor(Math.random() * specialChar.length)];
    }
  };

  if (numberss === true) {
    minNumbers = functionArray.getNumbers();
    minCount++;

   // maxNumbers = functionArray.getNumbers();
   // maxCount--;
  } //else {

 // }

  if (uppCases === true) {
    minUppCases = functionArray.getUppCase();
    minCount++;

   // maxUppCases = functionArray.getUppCase();
    //maxCount--;
  } //add else in future ask tutor

  if (specialChars === true) {
    minSpecialChars = functionArray.getSpecialChar();
    minCount++;

   // maxSpecialChars = functionArray.getSpecialChar();
    //maxCount--;
  }

  if (lowCases === true) {
    minLowCases = functionArray.getLowCase();
    minCount++;

    //maxLowCases = functionArray.getLowCase();
    //maxCount--;
  }

  //Displayed password
  var randomPasswGen = "";

  for (let i = 0; i < (parseInt(passwLength) - minCount); i++) {
    var randomNumbPickd = Math.floor(Math.random() * 4);

    randomPasswGen += randomNumbPickd;
  }

  randomPasswGen += minNumbers;
  randomPasswGen += minUppCases;
  randomPasswGen += minLowCases;
  randomPasswGen += minSpecialChars;

  return randomPasswGen;
  

}
