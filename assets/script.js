//generate password
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("password");

var allArray = [special, lowerCase, upperCase, number];

function generatePassword() {
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
    split(","),
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
    split(","),
  ];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", split(",")];
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
    split(","),
  ];

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

  // var charSet = "";
  // var charTypeLower = charType.toLowerCase();
  // if (charTypeLower === "lowerCase") {
  //   charSet = "abcdefghijklmnopqrstuvwxyz";
  // } else if (charTypeLower === "upperCase") {
  //   charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // } else if (charTypeLower === "numeric") {
  //   charSet = "0123456789";
  // } else if (charTypeLower === "special") {
  //   charSet = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  // }

  // ask for how many characters in generated password
  if (userLength < 8 || userLength > 128) {
    prompt.userLength;
    return alert(
      "Please select the amount of characters you'd like between 8-128 characters."
    );
    if (special || lowerCase || number || special) {
    }
    if (userLower) {
      possibleCharacter = possibleCharacter.concat(lowerCase);
    }
    if (userCapital) {
      possibleCharacter = possibleCharacter.concat(upperCase);
    }
    if (userSpecial) {
      possibleCharacter = possibleCharacter.concat(specialChar);
    }
    if (!userLower && !userSpecial && !userCapital && !userNumbers)
      alert("You must select a criteria for your password.");
    console.log(possibleCharacter);
    for (i = o; i < userLength; i++) {
      password = password.concat(retVal(possibleCharacter));
    }
    return password;
  }

  //return value
  function retVal(arr) {}
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
