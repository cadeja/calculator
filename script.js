
const numpadButtons = document.querySelectorAll(".numpad-button");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");

const input = document.querySelector("#input-box");

// numpad buttons event listener
// pushes text content of buttons to the input field
for (let i = 0; i < numpadButtons.length; i++){
    numpadButtons[i].addEventListener('click', () => {
        input.textContent += (numpadButtons[i].textContent);
    });
}

add.addEventListener("click", () =>{
    input.textContent += " + ";
});