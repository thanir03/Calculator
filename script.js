// HTML Elements chosen from Document
const operator = document.querySelectorAll(".operator");
const number = document.querySelectorAll(".number");
const userInputDisplay = document.querySelector("#user-input");
const clearEl = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
const backspace = document.querySelector(".backspace");
const negative = document.querySelector(".negative")

// Variables
let currentNum = "1";
let numArr1 = "";
let numArr2 = "";
let total = 0;
let symbol = null;

// Number button
number.forEach((x) =>
  x.addEventListener("click", () => {
    if (currentNum === "1") {
      //First number
      numArr1 += Number(x.textContent);
      stringfy(numArr1);
    } else if (currentNum === "2") {
      numArr2 += Number(x.textContent);
      stringfy(numArr2);
    }
  })
);
// Clear button
clearEl.addEventListener("click", () => {
  clear();
});

// Decimal button
decimal.addEventListener("click", () => {
  if (currentNum === "1" && !numArr1.includes(".")) {
    numArr1 += ".";
    stringfy(numArr1);
  } else if (currentNum === "2" && !numArr2.includes(".")) {
    numArr2 += ".";
    stringfy(numArr2);
  }
});

// Operator button
operator.forEach((x) =>
  x.addEventListener("click", () => {
    calculate(symbol);
    symbol = x.textContent;
    if (currentNum === "1") {
      currentNum = "2";
    }
  })
);

// Equal button
equal.addEventListener("click", () => {
  calculate(symbol);
});

// Backspace button
backspace.addEventListener("click", () => {
  removeNum();
});

negative.addEventListener("click",()=>{
  negativeOperator()
})

const negativeOperator = () =>{
  console.log(numArr1.length);
    if(currentNum === "1" && numArr1.length === 0){
      numArr1 = "-"
      stringfy(numArr1)
    }if(currentNum === "2" && numArr2.length === 0){
      numArr2 = "-"
      stringfy(numArr2)
    }
}

// Function to display the calculation
const stringfy = (numtype) => {
  if (numtype === "") {
    userInputDisplay.textContent = 0;
  } else {
    userInputDisplay.textContent = numtype;
  }
};

// Compute the calculation
const calculate = (operator) => {
  // When equal button is pressed without any symbol
  if (!symbol) {
    if (!numArr1) {
      total = 0;
    } else {
      total = numArr1;
    }
  }
  if (numArr1 === "") {
    numArr1 = 0;
  }
  if (numArr2 === "") {
    numArr2 = 0;
  }
  // When there is a operation
  if (operator === "+") {
    total = Number(numArr1) + Number(numArr2);
  } else if (operator === "-") {
    total = Number(numArr1) - Number(numArr2);
  } else if (operator === "÷") {
    total = Number(numArr1) / Number(numArr2);
  } else if (operator === "x") {
    total = Number(numArr1) * Number(numArr2);
  }
  symbol = null;
  // If number is infinity return 0
  if (Number.isNaN(total) || total === Infinity) {
    total = 0;
  }
  numArr1 = total.toString();
  numArr2 = "";
  // TO show the total in numArr
  stringfy(numArr1);
};

// To remove the last number in the number
const removeNum = () => {
  if (currentNum === "1") {
    if (numArr1.length === 1) {
      numArr1 = "";
    } else {
      numArr1 = numArr1.slice(0, numArr1.length - 1);
    }
    stringfy(numArr1);
  } else if (currentNum === "2") {
    if (numArr2.length === 1) {
      numArr2 = "";
    } else {
      numArr2 = numArr2.slice(0, numArr1.length - 1);
    }
    stringfy(numArr2);
  }
};

// To make the value back to default
const clear = () => {
  numArr1 = "";
  numArr2 = "";
  symbol = null;
  currentNum = "1";
  userInputDisplay.textContent = 0;
};


