// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var lowerCase = ["a", "b", "c", "d", "e", fghijklmnopqrstuvwxyz];
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = "!\#$%&()*+,-./:;<=>?@[\]^_{|}~";

function generatePassword(){
var length = Number(prompt("How many characters do you want your password to be? Enter a number between 8 and 128 "));
if (!length) {
  alert("This need a number")
} else if (length < 8 || length > 128) {
length = Number(prompt("Number has to be between 8 and 128"));
} else {
  var upCase = confirm("Do you want uppercase letters? Select OK for YES and Cancel for NO ");
  var loCase = confirm("Do you want lower case letters? Select OK for YES and Cancel for NO ");
  var num = confirm("DO you want to use numbers? Select OK for YEs and Cancel for No")
  var speChar = confirm("Do you want special characters? Select OK for YES and cancel for NO ");
};
  if (!upCase && !loCase && !num && !speChar) {
    choices = alert("You must chose at least one")
  }
  else if (speChar && num && upCase && loCase){
    choices 
  }
  return UserPass;
}

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
  
}

// Need the following variables:
    // selected length of the password
    // array of lowercase letters
    // array of uppercase letters
    // array of numbers
    // array of special characters
    // to hold the password we're building
    // possibly the mega-array

  // prompt for password length --> stored in a variable
  // Validate the user input --> if user chooses <8 or >128, alert that they need to choose a valid password length, then they're going to need to restart OR call the function that prompts for length again
  // prompt --> Do they want uppercase letters?
  // prompt --> Do they want lowercase letters?
  // prompt --> Do they want numbers?
  // prompt --> Do they want special characters?
  // Validate that the user has chosen at least one character set --> if not, either have them start over OR recursively call the function that prompts for the character sets
  // With each of those prompts, you need an array of those character types
    // There needs to be at least one of each selected character type included in the password
    // Randomly generate a character from each character set as it's chosen and add it to the end of the password that you're building (.push() for an array or .concat() for a string)
    // for loop:
      // for (var i = password.length - 1; i < passwordLength; i++)
    // EITHER keep the character sets separate OR combine them to a mega-array to pull the rest of the characters from
      // IF keeping the character sets separate, randomly generate a number to tell which array you're pulling from, then randomly generate a number to pull the character from the array (character will by array[number])
      // IF pushing to a mega-array randomly generate a number to pull a character from the array
      // IF pushing to a mega-array, remember to set the array back to an empty array at the start of the process!
  // return the generated password
