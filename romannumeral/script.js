/** @format */

const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const results = document.getElementById("output");
let convertedNum = [];

//listen to the page
//.addEventListener("click")
//.addEventListener("enter")
convertBtn.addEventListener("click", () => {
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
// function clearForm() {
//   results.style.display = "hidden";
//   convertedNum = [];
// }

function getUserInput(userInput) {
  convertedNum = [];

  //clear previous answer
  results.replaceChildren();

  if (userInput == "") {
    results.innerText = "Please enter a valid number";
    results.classList.remove("hidden");
    clearForm();
  } else if (userInput < 1) {
    results.innerText = "Please enter a number greater than or equal to 1";
    results.classList.remove("hidden");
    clearForm();
  } else if (userInput >= 4000) {
    results.innerText = "Please enter a number less than or equal to 3999";
    results.classList.remove("hidden");
    clearForm();
  } else {
    convertNumber(userInput);
  }

  if (!results.innerText) {
    const finalArr = convertedNum;
    results.innerText = returnResults(finalArr);
  }

  results.classList.remove("hidden");
}

function convertNumber(userInput) {
  //reverse the number so 1s is first, then 10s then etc
  const myNum = userInput.split("").reverse().join("");

  //getuserinput[0] (ones) =  1 print I, 2 II, 3 III 4 IV, 5 V, 6 VI, 7 VII, 8 VII, 9 IX and put in answer array
  const ones = myNum[0];
  const tens = myNum[1];
  const hundreds = myNum[2];
  const thousands = myNum[3];

  switch (ones) {
    case "1":
      convertedNum.push("I");
      break;
    case "2":
      convertedNum.push("II");
      break;
    case "3":
      convertedNum.push("III");
      break;
    case "4":
      convertedNum.push("IV");
      break;
    case "5":
      convertedNum.push("V");
      break;
    case "6":
      convertedNum.push("VI");
      break;
    case "7":
      convertedNum.push("VII");
      break;
    case "8":
      convertedNum.push("VIII");
      break;
    case "9":
      convertedNum.push("IX");
      break;
    case "0":
      break;
  }

  // if exists userinput[1] (tens) = 9 print XC , 8LXXX , 7 LXX, 6 LX, 5 L, 4 XL, 3 XXX, 2 XX, 1 X and unshift it to the front
  switch (tens) {
    case "1":
      convertedNum.unshift("X");
      break;
    case "2":
      convertedNum.unshift("XX");
      break;
    case "3":
      convertedNum.unshift("XXX");
      break;
    case "4":
      convertedNum.unshift("XL");
      break;
    case "5":
      convertedNum.unshift("L");
      break;
    case "6":
      convertedNum.unshift("LX");
      break;
    case "7":
      convertedNum.unshift("LXX");
      break;
    case "8":
      convertedNum.unshift("LXXX");
      break;
    case "9":
      convertedNum.unshift("XC");
      break;
    case "0":
      break;
  }

  //if exists userinput[2] (hundreds) = 9 print CM, 8 DCCC, 7 DCC, 6 DC, 5 D, 4 CD, 3 CCC, 2 CC, 1 C  and unshift it to the front
  switch (hundreds) {
    case "1":
      convertedNum.unshift("C");
      break;
    case "2":
      convertedNum.unshift("CC");
      break;
    case "3":
      convertedNum.unshift("CCC");
      break;
    case "4":
      convertedNum.unshift("CD");
      break;
    case "5":
      convertedNum.unshift("D");
      break;
    case "6":
      convertedNum.unshift("DC");
      break;
    case "7":
      convertedNum.unshift("DCC");
      break;
    case "8":
      convertedNum.unshift("DCCC");
      break;
    case "9":
      convertedNum.unshift("CM");
      break;
    case "0":
      break;
  }

  //if exists userinput[3] (thousands) = 3 MMM, 2 MM, 1 M  and unshift it to the front
  switch (thousands) {
    case "1":
      convertedNum.unshift("M");
      break;
    case "2":
      convertedNum.unshift("MM");
      break;
    case "3":
      convertedNum.unshift("MMM");
      break;
  }
  return convertedNum;
}

//return number as text string

function returnResults(convertedNum) {
  let finalLine = "";
  for (const item of convertedNum) {
    finalLine += item;
  }
  return finalLine;
}
