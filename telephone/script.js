
const userInput = document.getElementById("user-input");
const validateBtn = document.getElementById("check-btn");
const results = document.getElementById("results-div");

// const tenDigit = /^\d{10}/g;
//const elevenDigit = /1(\d{10})/;
const twelveDigit = /^(\(|-|\s)?(\d{3})(\)|\s|-)?(\d{3})(\s|-)?(\d{4})$/;
const thirteenDigit = /^1(\(|\s|-)(\d{3})(\)|\s|-)(\d{3})(\s|-)(\d{4})/;
const fourteenDigit = /^1\s?(\(|\s|-)(\d{3})(-|\s|\))\s?(\d{3})(-|\s|\))(\d{4})/;
const denyList = [ twelveDigit, thirteenDigit, fourteenDigit];
const parenCheck = /\(|\)/g

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

  results.textContent = "";
  return;
}

function matchCount(userInput){
  const check =  [...userInput.matchAll(parenCheck)]; 
  const isMatched = (check.length%2 === 0) ? true : false
  return isMatched

}


function getUserInput(userInput) {
  
  if (userInput == "") {
    results.innerText = alert("Please provide a phone number");
    return
  } else if (userInput.length < 10 || ![...userInput.matchAll(parenCheck)].length%2 === 0)
  {
    results.textContent = "Invalid US number: " + userInput
    userInput.value = "";
    results.classList.remove("hidden")
    return
  }
  else {
    const isGood = (userInput) =>
      denyList.some((regex) => regex.test(userInput));
    results.textContent = isGood(userInput)
      ? "Valid US number: " + userInput
      : "Invalid US number: " + userInput;
    userInput.value = "";
    results.classList.remove("hidden");
  }
}
