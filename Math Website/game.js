const timeSelected = Number(localStorage.getItem('timer'));
const minA1 = Number(localStorage.getItem('minA1'));
const maxA1 = Number(localStorage.getItem('maxA2'));
const minA2 = Number(localStorage.getItem('minA3'));
const maxA2 = Number(localStorage.getItem('maxA4'));
const minM1 = Number(localStorage.getItem('minM1'));
const maxM1 = Number(localStorage.getItem('maxM2'));
const minM2 = Number(localStorage.getItem('minM3'));
const maxM2 = Number(localStorage.getItem('maxM4'));

const timerScreen = document.getElementById('timerScreen');
const scoreDisplay = document.getElementById('score');
const questions = document.getElementById('currentQuestion');


let timeLeft = timeSelected;

// Countdown Logic
const countdown = setInterval(() => {
    const inputField = document.querySelector('#user-input');
    timeLeft--;
    timerScreen.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        inputField.disabled = true;
        document.getElementById('finalScore').textContent = score;
        document.getElementById('gameOver').style.display = 'flex';
    }
}, 1000);

let score = 0;
let currentAnswer = 0;

//RNG Logic
function questionGenerator()
{
const operation = Math.floor(Math.random()*4)+1;
let num1, num2, symbol;

 switch(operation){
    case  1:
        symbol="+";
        num1 = Math.floor(Math.random() * (maxA1 - minA1 + 1)) + minA1;
        num2 = Math.floor(Math.random() * (maxA2 - minA2 + 1)) + minA2;
        currentAnswer =  num1 + num2;
        break;

    case  2:
        symbol="-";
        num1 = Math.floor(Math.random() * (maxA1 - minA1 + 1)) + minA1;
        num2 = Math.floor(Math.random() * (maxA2 - minA2 + 1)) + minA2;
        if (num1<num2){
            [num1, num2] = [num2, num1];
        }
        currentAnswer = num1 - num2;
        break;

    case  3:
        symbol="*";
        num1 = Math.floor(Math.random() * (maxM1 - minM1 + 1)) + minM1;
        num2 = Math.floor(Math.random() * (maxM2 - minM2 + 1)) + minM2;
        currentAnswer =  num1 * num2;
        break;

    case  4:
        symbol="/";
        num2 = Math.floor(Math.random() * (maxM1 - minM1 + 1)) + minM1;
        currentAnswer = Math.floor(Math.random() * (maxM2 - minM2 + 1)) + minM2;
        num1 =  num2 * currentAnswer;
        break;
 }

 currentQuestion.textContent = `${num1} ${symbol} ${num2} = `;
}

document.getElementById('user-input').addEventListener('input', (e) => {
    let userGuess = e.target.value;

    if (Number(userGuess) === currentAnswer){
        score++;
        document.getElementById('user-input').value = "";
        display.textContent = `${score}`;


        questionGenerator();
    }
})

questionGenerator();
