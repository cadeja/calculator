
const numpadButtons = document.querySelectorAll(".numpad-button");
const input = document.querySelector("#input-box");

for (let i = 0; i < numpadButtons.length; i++){
    numpadButtons[i].addEventListener('click', () => {
        input.textContent += (numpadButtons[i].textContent);
    });
}

