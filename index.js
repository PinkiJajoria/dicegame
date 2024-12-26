

const MyDice = document.querySelector('#dice');
const button = document.querySelector('#butn');
const ul = document.querySelector('#ul');

let historyList = []

button.addEventListener('click', () => {
    MyDice.classList.add('roll-dice');
    setTimeout(() => {
        MyDice.classList.remove('roll-dice');
        rollResult();
    }, 1000);
});


function rollResult() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(randomNumber);
    MyDice.innerHTML = diceFace;
    historyList.push(randomNumber);
    updateRollHistory()
}


function updateRollHistory() {
    ul.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement('li')
        listItem.innerHTML = `Roll ${i + 1}: <span> ${getDiceFace(historyList[i])}</span >`;

        ul.appendChild(listItem);
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}








