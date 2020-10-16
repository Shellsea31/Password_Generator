// create arrays for numbers, letters, special characters
// no commas needed because strings don't exist in arrays, each character is its own index value
let char = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
let num = "0123456789";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase= "abcdefghijklmnopqrstuvwxyz";



////////////////////////////////////////////////////////////////////////////////////////////////
// create a function that runs when generate button is clicked
function generatePassword () {
let pwd = []; //random characters get added to this array
  // parseInt to turn string value into number value.
let passwordLength = parseInt(prompt("How many characters do you want in your password? (Must be between 8 - 128)"));

// if number not within range or not a number
if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  alert ("Please try again. (Must be a number between 8 - 128)");
  generatePassword();
} 

// ask to confirm different arrays. 
let confirmChar = confirm("Do you want to include special characters?");
let confirmNum = confirm("Do you want to include numbers?");
let confirmUpper = confirm("Do you want to include uppercase letter?");
let confirmLower = confirm("Do you want to include lower case letters?");


// If confirmed, push values into new array called pwd
if (confirmChar) {
  pwd.push(char);
}

if (confirmNum) {
  pwd.push(num);
}  

if (confirmUpper) {
  pwd.push(upperCase);
}

if (confirmLower) {
  pwd.push(lowerCase);
}

// new empty array which will contain new password strings after looping
let newPwd = "";

while (newPwd.length < passwordLength) {
  for (let i = 0; i < pwd.length; i++) {
    if (newPwd.length < passwordLength) {
      let randomChar = Math.floor(Math.random() * pwd[i].length)
     newPwd += pwd[i][randomChar]
     
    }
  }
  
}
return newPwd; // send the result of the function back to its call name
}


// Assignment Code ////////////////////////////////////////////////////////////////////////////////////////

// this is an event listener targeting the #generate button
// its set to when it sees the click event, it runs the function writePassword
// this is a new variable targeting the ID generate in HTML which is the button
let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  // newPwd now equals "password"
  let password = generatePassword(); 
  // this targets id password 
  let passwordText = document.querySelector("#password");

// gave it the new value of newPwd/password
  passwordText.value = password;
}






