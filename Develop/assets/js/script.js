// Assignment code here
var chars = "";
var numbers = "0123456789";
var uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
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
  var passwordLength = prompt("Enter the number of characters you want for your new password. Must be min. 8 & max. 128 characters long.");
  var numbers = confirm("Do you want numbers in your password?");
  var lowCase = confirm("Do you want lowercases in your password?")
}
