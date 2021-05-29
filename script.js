// Variables 
var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmmnopqrstuvqxyz";
var number = "0123456789";
var symbol = "!@#$%^&*()_+?~';><";

//
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// If /return for numbers
function Options() {
  var length = prompt ("How many characters would you like in your password, password must be 8-128 characters.");
  if (isNaN(length) === true) {
    return alert("Password must contain a number!")
}
// Statement to generate the correct amount of #'s.
if (length < 8 || length > 128) {
  return alert("Password must contain atleast 8 charaters, and a max of 128 characters!")
}
// Var confirming which characters being used in password.
var hasCapital = confirm("Would you like Uppercase characters in your password?");
var hasLowercase = confirm("Would you like Lowercase characters in your password?");
var hasNumber = confirm("Would you like Numeric characters in your password?");
var hasSymbol = confirm("Would you like Special (symbols) characters in your password?");

//  If (t/f) statement 
if (hasCapital === false && hasLowercase === false && hasNumber === false && hasSymbol === false) {
    return alert("Must choose one of the following for valid password!")
}


// variables
var options = {
    length: length,
    hasCapital: hasCapital,
    hasLowercase: hasLowercase,
    hasNumber: hasNumber,
    hasSymbol: hasSymbol,
}

return options;
}

// This function creates password determind by users. 
function generatePassword() {
  var giveOptions = Options ();
  var password = "";
  var passwordDomain = "";


//If statements to find out what characters user wants
if (giveOptions["hasCapital"]) {
  passwordDomain = passwordDomain + capital;
}

if (giveOptions["hasLowercase"]) {
  passwordDomain = passwordDomain + lowercase;
}
if (giveOptions["hasNumber"]) {
  passwordDomain = passwordDomain + number;
}
if (giveOptions["hasSymbol"]) {
  passwordDomain = passwordDomain + symbol;
}

// for loop to generate random 
for (var i = 0; i < giveOptions["length"]; i++) {
  var passwordCharIndex = Math.floor(Math.random() * passwordDomain.length);
  password = password + passwordDomain[passwordCharIndex];
  console.log(i);
}
//Give the password created by generator
return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
