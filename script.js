// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~"];
var choices;
var upCase;
  var loCase;
  var num;
  var speChar;

function generatePassword(){
enter = parseInt(prompt("How many characters do you want your password to be? Enter a number between 8 and 128 "));
if (!enter) {
  alert("This need a number")
} else if (enter < 8 || enter > 128) {
enter = parseInt(prompt("Number has to be between 8 and 128"));
} else {
  upCase = confirm("Do you want uppercase letters? Select OK for YES and Cancel for NO ");
  loCase = confirm("Do you want lower case letters? Select OK for YES and Cancel for NO ");
  num = confirm("DO you want to use numbers? Select OK for YEs and Cancel for No");
  speChar = confirm("Do you want special characters? Select OK for YES and cancel for NO ");
};
  if (!upCase && !loCase && !num && !speChar) {
    choices = alert("You must chose at least one")
  }
  else if (speChar && num && upCase && loCase) {
    choices = specialChar.concat(numbers, lowerCase, upperCase);
  } 
  else if (speChar && num && upCase) {
    choices = specialChar.concat(numbers, upperCase);

  } 
  else if (speChar && num && loCase) {
    choices = specialChar.concat(numbers,lowerCase);

  } 
  else if (speChar && loCase && upCase) {
    choices = specialChar.concat(upperCase, lowerCase);

  } 
  else if (num && loCase && upCase) {
    choices = numbers.concat(upperCase, lowerCase);
  }
else if (speChar && num) {
  choices = specialChar.concat(numbers);
}
else if (speChar && loCase) {
  choices =  specialChar.concat(lowerCase);

}
else if (speChar && upCase) {
  choices = specialChar.concat(upperCase);
}
else if (loCase && num) {
  choices = lowerCase.concat(numbers);
}
else if (loCase && upCase) { 
choices = lowerCase.concat(upperCase);

}
else if (num && upCase) {
  choices = numbers.concat(upperCase);
}
else if (speChar) {
  choices = specialChar;
}
else if (num) {
  choices = numbers;
}
else if (loCase) {
  choices = lowerCase;
}
else if (upCase) {
  choices = upperCase;
};
var genPass = [];
 for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random()* choices.length)];
  genPass.push(pickChoices);
 }
 var ps = genPass.join("");
 
  return ps; 
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
