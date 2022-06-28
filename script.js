const operatorBtn = document.querySelectorAll(".operator");
const numberBtn = document.querySelectorAll(".number");
const previousNumberDisplay = document.querySelector("#previousNum");
const currentNumberDisplay = document.querySelector("#currentNum");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");
const backspaceBtn = document.querySelector(".backspace");
const negativeBtn = document.querySelector(".negative");

// Variables
let currentNumber = "";
let previousNumber = "";
let totalNumber = 0;
let operatorVar = "";

window.onload = () =>{
  clearFunc()
}
numberBtn.forEach(button =>{
  button.addEventListener("click",()=>{
    displayNumFunc(button.textContent)
  })
})
operatorBtn.forEach(button =>{
  button.addEventListener("click",()=>{
    operatorFunc(button.textContent)
  })
})
clearBtn.addEventListener("click",()=>{
  clearFunc()
})
equalBtn.addEventListener("click",()=>{
  compute()
})
backspaceBtn.addEventListener("click",()=>{
  removeChar()
})
negativeBtn.addEventListener("click",()=>{
  negativeFunc()
})

const displayNumFunc = (number) =>{
    if(number === "." && currentNumber.includes(".")) return 
    currentNumber += number
    updateDisplay()
}
const negativeFunc = () =>{
  if(currentNumber.includes("-"))return
  currentNumber = `-${currentNumber}`
  updateDisplay()
}

const removeChar = () =>{
  currentNumber = currentNumber.slice(0,currentNumber.length-1)
  updateDisplay()
}


const operatorFunc = (operator) =>{
  if(currentNumber === "") return 
  if(previousNumber !== ""){
    compute()
  }
  previousNumber = currentNumber;
  operatorVar = operator;
  currentNumber = "";
  updateDisplay();
    
}
const clearFunc = () =>{
  currentNumber = "";
  previousNumber = "";
  totalNumber = 0;
  operatorVar = "";
  currentNumberDisplay.textContent = 0;
}
const updateDisplay = () => {
  previousNumberDisplay.textContent = `${previousNumber} ${operatorVar}`;
  currentNumberDisplay.textContent = currentNumber ;   
}
const compute = () =>{
    if(currentNumber === ""|| previousNumber === "" || operatorVar === "" )return
  switch(operatorVar){
    case "+":
      totalNumber = Number(previousNumber) + Number(currentNumber)
      break;
    case "-":
      totalNumber = Number(previousNumber) - Number(currentNumber)
      break;
    case "x":
      totalNumber = Number(previousNumber) * Number(currentNumber)
      break;
    case "÷":
      totalNumber = Number(previousNumber) / Number(currentNumber)
      break;
  }
  previousNumber = "";
  currentNumber = totalNumber.toString();
  operatorVar = "";
  totalNumber = 0
  updateDisplay();
}