//generate password
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// Listing all possible values
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [
  "!",
  "\u0022",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "\u005B",
  "\u005C",
  "\u005D",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

var allArray = [special, lowerCase, upperCase, number];

// function to generate the password. Asks user for criteria of desired password
function generatePassword() {
  var possibleCharacter = [];
  var password = [];
  var userLength = prompt(
    "How many characters would you like in your new password? \n 8 Minimum, 128 Maximum"
  );
  var userLower = confirm(
    "Would you like to use lower case letters? \n Ok for Yes, Cancel for No"
  );
  var userSpecial = confirm(
    "Would you like to use special characters? \n Ok for Yes, Cancel for No"
  );
  var userCapital = confirm(
    "Would you like to use capital letters? \n Ok for Yes, Cancel for No"
  );
  var userNumbers = confirm(
    "Would you like to use numbers? \n Ok for Yes, Cancel for No"
  );

  if (userLength < 8 || userLength > 128) {
    // alert ("Please select a number between 8 and 128 \n for Password Length");
    prompt.userLength;
    return alert("Please Select a password range between 8 and 128");
  }
  if (special || lowerCase || number || upperCase) {
  }
  if (userLower) {
    possibleCharacter = possibleCharacter.concat(lowerCase);
  }
  if (userCapital) {
    possibleCharacter = possibleCharacter.concat(upperCase);
  }
  if (userSpecial) {
    possibleCharacter = possibleCharacter.concat(special);
  }
  if (userNumbers) {
    possibleCharacter = possibleCharacter.concat(number);
  }
  // this debugs the application so it requires the user to stay within the character number parameters
  if (!userLower && !userChar && !userCapital && !userNumbers)
    alert("You must select a criteria for your password.");
  console.log(possibleCharacter);
  for (i = 0; i < userLength; i++) {
    password = password.concat(getRandom(possibleCharacter));
  }
  return password.join("");
}

function getRandom(arr) {
  //this function makes it possible to create a random text
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
