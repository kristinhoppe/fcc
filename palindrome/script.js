/** @format */

//get input from form
const input = document.getElementById("text-input");
const palindromeBtn = document.getElementById("check-btn");
const results = document.getElementById("results");
let originalString = "";
let returnText = "";

palindromeBtn.addEventListener("click", () => {
  getInput(input.value);
  input.value = "";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getInput(input.value);
    input.value = "";
  }
});

// input.addEventListener("focus", () => {
//   document.getElementById("result").classList.add("hidden");
// });

function getInput(input) {
  originalString = input;

  const cleanString = cleanInputString(input);
  const palindromeCheck = checkForPalindrome(cleanString);

  returnResults(palindromeCheck);
  // document.activeElement.blur();
}

//regex out non-alphanumeric characters
function cleanInputString(input) {
  const regex = input.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
  return regex;
}

//check for palindrome
function checkForPalindrome(string) {
  if (string === "") {
    return alert("Please input a value");
  } else if (string === string.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

//return original entry + is/isnot a palindrome
function returnResults(facts) {
  if (facts === true) {
    returnText = `${originalString} is a palindrome.`;
  } else {
    returnText = `${originalString} is not a palindrome`;
  }
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("result").innerHTML = returnText;
  return returnText;
}
