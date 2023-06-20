var generateBtn = document.querySelector("#generate");

// This function is called when the user clicks the "Generate Password" button
// Prompts the user for the password criteria
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
// This is where the user is prompted to select the criteria for the password
  var includeLowerCase = confirm("Include lowercase letters?");
  var includeUpperCase = confirm("Include uppercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecialChars = confirm("Include special characters?");

  // If the user does not select any criteria, then an alert is displayed
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

  // This is where the password is generated
  var password = generatePassword(criteria);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// This chose the characters for the password
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

  // This randomly chooses the characters for the password
  for (var i = 0; i < criteria.length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    var randomChar = charset[randomIndex];
    password += randomChar;
  }

  return password;
}

// Makes the "Generate Password" button clickable
generateBtn.addEventListener("click", writePassword);
