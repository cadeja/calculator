
const numpadButtons = document.querySelectorAll(".numpad-button");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equal = document.querySelector("#equal");

const inputBox = document.querySelector("#input-box");
const answerBox = document.querySelector("#answer-box");

let currentValue = "";
let totalValue = 0;
let input = "";
let quOperator = ""; //queued Operator




// numpad buttons event listener
// pushes text content of buttons to the input field
for (let i = 0; i < numpadButtons.length; i++){
    numpadButtons[i].addEventListener('click', () => {
        inputBox.textContent += (numpadButtons[i].textContent);
        currentValue += (numpadButtons[i].textContent);
    });
}

// OPERATORS

/*

For each operation, updates totalValue using currentValue and the operator
Updates answerBox text content with totalValue

*/

// takes values and quOperator and spits out result
function operation(a,b,operator){
    switch (operator) {
        case "add":
            return +a + +b;
            break;
        case "subtract":
            return +a - +b;
            break;
        case "multiply":
            return +a * +b;
            break;
        case "divide":
            return +a / +b;
            break;
        case "":
            return +b;
            break;
    }
}

//addition
add.addEventListener("click", () =>{
    answerBox.textContent = operation(totalValue, currentValue, quOperator);
    quOperator = "add"
    currentValue = "";
    inputBox.textContent += " + ";
});

//subtraction
subtract.addEventListener("click", () =>{
    totalValue = operation(totalValue, currentValue, quOperator);
    quOperator = "subtract"
    currentValue = "";
    answerBox.textContent = totalValue;
    inputBox.textContent += " - ";
});

//multiplication
multiply.addEventListener("click", () =>{
    totalValue = operation(totalValue, currentValue, quOperator);
    quOperator = "multiply"
    currentValue = "";
    answerBox.textContent = totalValue;
    inputBox.textContent += " x ";
});

//division
divide.addEventListener("click", () =>{
    totalValue = operation(totalValue, currentValue, quOperator);
    quOperator = "divide"
    currentValue = "";
    answerBox.textContent = totalValue;
    inputBox.textContent += " / ";
});

//equal
equal.addEventListener("click", () =>{
    totalValue = operation(totalValue, currentValue, quOperator);
    quOperator = ""
    currentValue = "";
    answerBox.textContent = totalValue;
    inputBox.textContent += ` = ${totalValue}`;
});