// Query Selectors

const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");

const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const decimalBtn = document.querySelector(".decimal");

const currentScreen = document.querySelector(".current-screen");
const previousScreen = document.querySelector(".previous-screen");

// Event Listeners

clearBtn.addEventListener("click", () => {
    handleClear();
})

numberBtn.forEach((num) => {
    num.addEventListener("click", (e) => {
        handleNumber(e.target.innerText);
        currentScreen.textContent = `${currentNum}`
    })
})

operatorBtn.forEach((op) => {
    op.addEventListener("click", (e) => {
        if (currentNum !== "" && previousNum !== ""){
            handleEqual();
            previousNum = currentNum;
            currentNum = "";
            handleOperator(e.target.innerText);
            currentScreen.textContent = previousNum;
            previousScreen.textContent = `${previousNum} ${operator}`;
        } else if(previousNum !== ""){
            handleOperator(e.target.innerText);
            previousScreen.textContent = `${previousNum} ${operator}`;
        } else{
            handleOperator(e.target.innerText);
            previousScreen.textContent = `${currentNum} ${operator}`;
            previousNum = currentNum;
            currentNum = "";
        }
    })
})

equalBtn.addEventListener("click", () => {
    if(currentNum !== "" && previousNum !== ""){
        if (operator === "/" && currentNum === "0"){
            handleClear();
            alert("Nice try... you cant divide by 0!");
        } else {
            handleEqual();
            previousNum = currentNum;
            currentNum = "";
            operator = "";
            currentScreen.textContent = previousNum;
            previousScreen.textContent = "";
        }
        
    }
})

decimalBtn.addEventListener("click", () => {
    handleDecimal();
})

// Global Variables

let operator = "";
let currentNum = "";
let previousNum = "";

// Handle Functions

const handleClear = () => {
    operator = "";
    currentNum = "";
    previousNum = "";
    currentScreen.textContent = "";
    previousScreen.textContent = "";
}

const handleNumber = (num) => {
    currentNum += num;
}

const handleOperator = (op) => {
    operator = op;
}

const handleEqual = () => {
    currentNum = Number(currentNum);
    previousNum = Number(previousNum);

    if(operator === "+"){
        currentNum += previousNum;
    } else if (operator === "-"){
        currentNum = previousNum - currentNum;
    } else if (operator === "*"){
        currentNum *= previousNum
    } else if (operator === "/"){
        currentNum = previousNum / currentNum;
    }

    currentNum = currentNum.toString()
    if(currentNum.length >= 10){
        currentNum = Math.round(Number(currentNum) * 1000) / 1000
        currentNum += "..."
    }

    currentNum = currentNum.toString()
    previousNum = previousNum.toString()
}

const handleDecimal = () => {
    if(!currentNum.includes(".")){
        currentNum += ".";
    }
}