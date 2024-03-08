const userInput = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const results = document.getElementById("output")
let convertedNum = []

//listen to the page
//.addEventListener("click")
//.addEventListener("enter")
convertBtn.addEventListener('click', () => {
  getUserInput(userInput.value);
  userInput.value = parseInt(userInput.value);
  
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    getUserInput(userInput.value);
    userInput.value = parseInt(userInput.value);
  }
});

//clear text
function clearForm(){
 results.style.display = "hidden"
  convertedNum=[]
}


function getUserInput(userInput) {
  convertedNum = ""

  //clear previous answer
  results.replaceChildren()

  if (userInput == '') {
    results.innerText = "Please enter a valid number"
    results.classList.remove('hidden')
    clearForm()
  } else if (userInput < 1) {
    results.innerText = "Please enter a number greater than or equal to 1"
    results.classList.remove('hidden')
    clearForm()
  } else if (userInput >= 4000) {
    results.innerText = "Please enter a number less than or equal to 3999"
    results.classList.remove('hidden')
    clearForm()
  }
  else {
  
  if (!results.innerText){
  const finalArr = convertNumber(userInput)
  results.innerText = finalArr
  }

  results.classList.remove('hidden');
  }
}

function whileLoop(convertedNum, rMnum, arNum) {
  while (convertedNum.value >= arNum) {
    convertedNum.numeral += rMnum;
    convertedNum.value -= arNum;
  }
}

const numKey = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertNumber(userInput) {
  let convertedNum = {
    value: userInput,
    numeral: "",
  };

  // whileLoop(result, "V", 5)
  // whileLoop(result, "I", 1)

  for (const rmNum in numKey) {
    whileLoop(convertedNum, rmNum, numKey[rmNum]);
  }
  
  return convertedNum.numeral;
}
  
