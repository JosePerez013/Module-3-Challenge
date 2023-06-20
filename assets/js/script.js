var generateBtn = document.querySelector("#generate");

function writePassword() {
  var length = prompt(
    "Enter the length of the password (between 8 and 128 characters)"
  );

  if (length === null || length === "") {
    alert("Please enter a number between 8 and 128");
    return;
  }

  length = parseInt(length);

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Try again. Enter a number between 8 and 128");
    return;
  }

  var includeLowerCase = confirm("Include lowercase letters?");
  var includeUpperCase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  if (
    !includeLowerCase &&
    !includeUpperCase &&
    !includeNumbers &&
    !includeSpecialChars
  ) {
    alert("Pick on character type!!!");
    return;
  }

  var criteria = {
    length: length,
    includeLowerCase: includeLowerCase,
    includeUpperCase: includeUpperCase,
    includeNumbers: includeNumbers,
    includeSpecialChars: includeSpecialChars,
  };

  var password = generatePassword(criteria);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(criteria) {
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var password = "";
  var charset = "";

  if (criteria.includeUpperCase) {
    charset += uppercaseChars;
  }

  if (criteria.includeLowerCase) {
    charset += lowercaseChars;
  }

  if (criteria.includeNumbers) {
    charset += numberChars;
  }

  if (criteria.includeSpecialChars) {
    charset += specialChars;
  }

  for (var i = 0; i < criteria.length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    var randomChar = charset[randomIndex];
    password += randomChar;
  }

  return password;
}

generateBtn.addEventListener("click", writePassword);
