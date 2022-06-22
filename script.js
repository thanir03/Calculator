const operator = document.querySelectorAll(".operator");
const number = document.querySelectorAll(".number");
const userInputDisplay = document.querySelector("#user-input");
const clearEl = document.querySelector(".clear");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".decimal");
let currentNum = "1";
let numArr1 = "";
let numArr2 = "";
let total = 0;
let symbol;

// Back button
// Refactor bugs available in this app
// Negative operation feature
// Calculating without equal button
number.forEach((x) =>
  x.addEventListener("click", () => {
    if (currentNum === "1" && numArr1 !== total.toString()) {
      numArr1 += Number(x.textContent);
      stringfy(numArr1);
    } else if (currentNum === "2") {
      numArr2 += Number(x.textContent);
      stringfy(numArr2);
    }
  })
);

const stringfy = (numtype) => {
  userInputDisplay.textContent = numtype;
  console.log(numArr1, numArr2);
};

clearEl.addEventListener("click", () => {
  clear();
});

decimal.addEventListener("click", () => {
  if (currentNum === "1" && numArr1 !== total.toString()) {
    console.log(numArr1);
    if (!numArr1.includes(".")) {
      numArr1 += ".";
      stringfy(numArr1);
    }
  } else if (currentNum === "2") {
    if (!numArr2.includes(".")) {
      numArr2 += ".";
      stringfy(numArr2);
    }
  }
});

operator.forEach((x) =>
  x.addEventListener("click", () => {
    symbol = x.textContent;
    if (currentNum === "1") {
      currentNum = "2";
    } else {
      currentNum = "1";
    }
  })
);

const calculate = (operator) => {
  if (!symbol) {
    total = numArr1;
  }
  if (numArr1 === "") {
    numArr1 = 0;
  }
  if (numArr2 === "") {
    numArr2 = 0;
  }
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
  currentNum = "1";
  if (Number.isNaN(total)) {
    total = 0;
  }
  numArr1 = total.toString();
  numArr2 = "";
  stringfy(numArr1);
};

equal.addEventListener("click", () => {
  calculate(symbol);
});

const clear = () => {
  numArr1 = "";
  numArr2 = "";
  userInputDisplay.textContent = 0;
};
