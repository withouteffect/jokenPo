const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');
const humanChoiceDisplay = document.querySelector('.human-choice');
const machineChoiceDisplay = document.querySelector('.machine-choice');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
    const machineChoice = playMachine();
    displayChoices(humanChoice, machineChoice);
    playTheGame(humanChoice, machineChoice);
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const displayChoices = (humanChoice, machineChoice) => {
    humanChoiceDisplay.innerHTML = `
        <div class="choice">
            <span>Você:</span>
            <span>${getImageUrl(humanChoice)}</span>
        </div>
    `;
    machineChoiceDisplay.innerHTML = `
        <div class="choice">
            <span>Máquina:</span>
            <span>${getImageUrl(machineChoice)}</span>
        </div>
    `;
}

const getImageUrl = (choice) => {
    const emojis = {
        rock: '&#x1F44A;',
        paper: '&#x1f590;',
        scissors: '&#x270c;'
    };
    return emojis[choice];
}

const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + "  Maquina: " + machine);

    // Remove as classes de cor existentes antes de mostrar o novo resultado
    result.classList.remove('green', 'red');

    if (human === machine) {
        result.innerHTML = 'Empatou! ⚠️';
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = 'Você Ganhou! 😃';
        result.classList.add('green');
    } else {
        machineScoreNumber++;
        machineScore.innerHTML = machineScoreNumber;
        result.innerHTML = 'Você Perdeu! 😢';
        result.classList.add('red');
    }
}
