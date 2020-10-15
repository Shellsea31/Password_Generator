// create arrays for numbers, letters, special characters
// no commas needed because strings don't exist in arrays, each character is its own index value
let char = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let num = "0123456789";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase= "abcdefghijklmnopqrstuvwxyz";

////////////////////////////////////////////////////////////////////////////////////////////////

var passwordLength = prompt("How many characters do you want in your password? (Must be between 8 - 128)");


if (passwordLength >= 8 && passwordLength <= 128) {
  var confirmChar = confirm("Do you want to include special characters?");
  var confirmNum = confirm("Do you want to include numbers?");
  var confirmUpper = confirm("Do you want to include uppercase letter?");
  var confirmLower = confirm("Do you want to include lower case letters?");
  
  if (confirmChar !== true && confirmNum !== true && confirmUpper !== true && confirmLower !== true); {
    alert("Please refresh the page and try again. You must select at least one character type!")
 }
} else { 
  alert("Please refresh the page and try again. (Must be between 8 - 128)")
}




// generatePassword =  ;//this should equal something



// Assignment Code
// this is a new variable targeting the ID generate in HTML which is the button
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
// this is an event listener with is attached to the generate button
// its set to when it sees the click event, it runs the function writePassword
generateBtn.addEventListener("click", writePassword);


