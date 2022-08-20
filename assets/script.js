// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var length = Number(
  prompt(
    "How many characters will your password be? Enter a number between 8 and 128"
  )
);

//ask for character type
var charType = prompt(
  "Enter a character type: special, numeric, uppercase, lowercase."
);

//generate password
function generatePassword() {
  //evaluate character type
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if (charTypeLower === "lowercase") {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if (charTypeLower === "uppercase") {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (charTypeLower === "numeric") {
    charSet = "0123456789";
  } else if (charTypeLower === "special") {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }
  //return value
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}
alert(generatePassword());

//make password appear in display box
document.getElementById("display").value = password;

// var password = document.getElementById("password");

// function generatePassword() {
//   var chars =
//     "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var passwordLength = 12;
//   var password = "";
//   for (var i = 0; i <= passwordLength; i++) {
//     var randomNumber = Math.floor(Math.random() * chars.length);
//     password += chars.substring(randomNumber, randomNumber + 1);
//   }
//   document.getElementById("password").value = password;
// }

// function copyPassword() {
//   var copyText = document.getElementById("password");
//   copyText.select();
//   document.execCommand("copy");
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
