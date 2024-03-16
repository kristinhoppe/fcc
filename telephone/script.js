/** @format */

const userInput = document.getElementById("user-input");
const validateBtn = document.getElementById("check-btn");
const results = document.getElementById("results-div");
let checkNum = [];

const tenDigit = /^\d{10}/g;
const elevenDigit = /1(\d{10})/g;
const twelveDigit = /^(\(|-|\s)?(\d{3})(\)|\s|-)?(\d{3})(\s|-)?(\d{4})$/g;
const thirteenDigit = /^1(\()(\d{3})(\))(\d{3})(\d{4})$/g;
const fourteenDigit = /^1(\(|\s|-)?(\d{3})(\)|-|\s|)?(\d{3})(-|\s)?(\d{4})$/g;
const denyList = [
  tenDigit,
  elevenDigit,
  twelveDigit,
  thirteenDigit,
  fourteenDigit,
];

//listen to the page
//.addEventListener("click")
//.addEventListener("enter")
validateBtn.addEventListener("click", () => {
  getUserInput(userInput.value);
  userInput.value = parseInt(userInput.value);
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getUserInput(userInput.value);
    userInput.value = parseInt(userInput.value);
  }
});

//clear text
function clearForm() {
  //results.style.display = "hidden";
  document.getElementById("user-input").value = "";

  checkNum = [];
}

function getUserInput(userInput) {
  if (userInput == "") {
    results.innerText = alert("Please enter a valid number");
    clearForm();
  } else {
    checkNum = userInput;
    console.log(userInput);
    console.log(checkNum);
    const isBad = (userInput) =>
      denyList.some((regex) => regex.test(userInput));
    if (userInput.length === 10) {
      (userInput) => regex.text(userInput);
    }
    results.textContent = !isBad(userInput)
      ? "Invalid US number: " + userInput
      : "Valid US number: " + userInput;
    userInput.value = "";
    results.classList.remove("hidden");
  }
}

//regex check for
// 10 or 11 digits
//then if 10
// optional parenthesis around digits 2-4
//optional dashes
//optional spaces
// if 11 digits long 1st digit must be 1

//strip dashes/spaces
//check for parenthesis location
