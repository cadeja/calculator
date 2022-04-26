
const numpadButtons = document.querySelectorAll(".numpad-button");
const float = document.querySelector("#float");
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
let isDot = false;
let isFloat = false;




// numpad buttons event listener (0-9)
// pushes text content of buttons to the input field
for (let i = 0; i < numpadButtons.length; i++){
    numpadButtons[i].addEventListener('click', () => {

        // if a number is pressed after pressing the "=" button, clears the inputBox
        if (isEvaluated == true){    
            inputBox.textContent = "";
            isEvaluated = false;
        }

        inputBox.textContent += (numpadButtons[i].textContent);
        currentValue += (numpadButtons[i].textContent);
        operatorInUse = false;
        isDot = false;
    });
}

//float event listener (.)
float.addEventListener("click", () =>{
    let string = inputBox.textContent;  // makes next line more legible
    if (!isFloat){
        inputBox.textContent += ".";
        currentValue += ".";
        operatorInUse = false;
        isFloat = true;

        // used in operators to prevent calculations with single dot
        if (currentValue == "."){
            isDot = true;
        }
    }
});

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

// the function called in the operator event listeners
// manages the bulk of calculations and text boxes
function calculate(){

    let operator = this.textContent; // one of: + - * / =

    if (!isDot) {  // prevents attempting to calculate with "." as a number

        isFloat = false;

        // + - * /
        if (operator == "+" || operator == "-" || operator == "x" || operator == "/"){

            // condition prevents chaining operators ("5 + + / 6")
            // also prevents operators before any number have been added
            // TODO: MAKE AN EXCEPTION FOR "-"
            if (currentValue != "" && !operatorInUse){          
                totalValue = operation(totalValue, currentValue, quOperator);   // does the calculation

                quOperator = operator;                                          // queues the operator
                isEvaluated = false;
                currentValue = "";
                operatorInUse = true;

                answerBox.textContent = totalValue;
                inputBox.textContent += ` ${operator} `;
            } 
            
            // checks to see if a calculation has started
            // if so, replaces operator with new one (e.g. changes "5 - " to "5 + " upon hitting the "+" button)
            else if (totalValue != ""){

                quOperator = operator;
                isEvaluated = false;

                let string = inputBox.textContent; // simplifies next line
                inputBox.textContent = string.slice(0,string.length - 3) + ` ${operator} `; //replaces operator in inputBox
            }
            
        } 

        // =
        else if(operator == "="){
            if (currentValue != ""){
                totalValue = operation(totalValue, currentValue, quOperator);
                quOperator = ""
                currentValue = totalValue;          //allows continuing calculation using totalValue
                answerBox.textContent = totalValue;
                inputBox.textContent += ` = ${totalValue}`;
                isEvaluated = true;
            }
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

