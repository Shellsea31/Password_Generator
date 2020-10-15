// create arrays for numbers, letters, special characters
// no commas needed because strings don't exist in arrays, each character is its own index value
let char = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let num = "0123456789";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase= "abcdefghijklmnopqrstuvwxyz";

////////////////////////////////////////////////////////////////////////////////////////////////

// prompt the user to chose if they want special characters, numbers, and or letters
let amount = prompt("Please select the length of your password. (Must be between 8-128)")
let charactersQ = confirm("Do you want your password to include special characters?");
let numbersQ = confirm("Do you want your password to include numbers?");
let lettersUQ = confirm("Do you want your password to include uppercase letters?");
let lettersLQ = confirm("Do you want your password to include lowercase letters?");



// generatePassword =  ;//this should equal something


// Assignment Code
// this is a new variable targeting the ID generate in HTML which is the button
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("worked");
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// this is an event listener with is attached to the generate button
// its set to when it sees the click event, it runs the function writePassword
generateBtn.addEventListener("click", writePassword);


