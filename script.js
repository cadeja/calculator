
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
let operatorInUse = false;
let isEvaluated = false;




// numpad buttons event listener
// pushes text content of buttons to the input field
for (let i = 0; i < numpadButtons.length; i++){
    numpadButtons[i].addEventListener('click', () => {
        if (isEvaluated == true){
            inputBox.textContent = "";
            isEvaluated = false;
        }
        inputBox.textContent += (numpadButtons[i].textContent);
        currentValue += (numpadButtons[i].textContent);
        operatorInUse = false;
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
        case "+":
            return +a + +b;
            break;
        case "-":
            return +a - +b;
            break;
        case "x":
            return +a * +b;
            break;
        case "/":
            return +a / +b;
            break;
        case "":
            return +b;
            break;
    }
}


function calculate(){

    let operator = this.textContent;

    if (operator == "+" || operator == "-" || operator == "x" || operator == "/"){
        if (currentValue != "" && !operatorInUse){
            totalValue = operation(totalValue, currentValue, quOperator);
            quOperator = operator;
            currentValue = "";
            operatorInUse = true;
            answerBox.textContent = totalValue;
            inputBox.textContent += ` ${operator} `;
        } else if (totalValue != ""){
            quOperator = operator;
            let string = inputBox.textContent;
                //    inputBox.textContent = string.slice(0,string.length - 3) + ` ${operator} `;
        }
        isEvaluated = false;
    } else if(operator == "="){
        if (currentValue != ""){
            totalValue = operation(totalValue, currentValue, quOperator);
            quOperator = ""
            currentValue = "";
            answerBox.textContent = totalValue;
            inputBox.textContent += ` = ${totalValue}`;
            operatorInUse = true;
            isEvaluated = true;
        }
    }
}

add.addEventListener("click",calculate);
equal.addEventListener("click", calculate);
subtract.addEventListener("click",calculate);
multiply.addEventListener("click",calculate);
divide.addEventListener("click",calculate);


//addition
// add.addEventListener("click", () =>{
//     if (currentValue != "" && !operatorInUse){
//         totalValue = operation(totalValue, currentValue, quOperator);
//         quOperator = "add";
//         currentValue = "";
//         operatorInUse = true;
//         answerBox.textContent = totalValue;
//         inputBox.textContent += " + ";
//     } else if (totalValue != ""){
//         quOperator = "add";
//         let string = inputBox.textContent;
//         inputBox.textContent = string.slice(0,string.length - 3) + " + ";
//     }
// });

//subtraction
// subtract.addEventListener("click", () =>{
//     if (currentValue != ""){
//         totalValue = operation(totalValue, currentValue, quOperator);
//         quOperator = "subtract"
//         currentValue = "";
//         answerBox.textContent = totalValue;
//         inputBox.textContent += " - ";
//     }
// });

// //multiplication
// multiply.addEventListener("click", () =>{
//     if (currentValue != ""){
//         totalValue = operation(totalValue, currentValue, quOperator);
//         quOperator = "multiply"
//         currentValue = "";
//         answerBox.textContent = totalValue;
//         inputBox.textContent += " x ";
//     }
// });

// //division
// divide.addEventListener("click", () =>{
//     if (currentValue != ""){
//         totalValue = operation(totalValue, currentValue, quOperator);
//         quOperator = "divide"
//         currentValue = "";
//         answerBox.textContent = totalValue;
//         inputBox.textContent += " / ";
//     }
// });

//equal
//equal.addEventListener("click", () =>{
//     if (currentValue != ""){
//         totalValue = operation(totalValue, currentValue, quOperator);
//         quOperator = ""
//         currentValue = "";
//         answerBox.textContent = totalValue;
//         inputBox.textContent += ` = ${totalValue}`;
//     }
// });

