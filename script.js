let targetNumber = genRandomNumber();
let attemptsLeft = 10;

const guessInput = document.getElementById("guessInput");
const button = document.getElementById("guessButton");
const msg = document.getElementById("message");
const attempt = document.getElementById("attempts");
const reset = document.getElementById("resetButton");

button.addEventListener("click", handleGame);
reset.addEventListener("click", resetGame);

function genRandomNumber(){
  return Math.floor(Math.random() * 100) + 1;
}

function handleGame(){
  const userGuess = parseInt(guessInput.value);

  if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
    msg.textContent = "Please enter a valid number between 1 and 100";
    return;
  }
  attemptsLeft--;

  if(userGuess === targetNumber){
    msg.textContent = "Congratulations, you had entered correct number!";
    msg.style.color = "green";
    endGame();
  }

  else if(userGuess > targetNumber){
    msg.textContent = "Too high. Try again!";
    msg.style.color = "red";
  }

  else if (userGuess < targetNumber){
    msg.textContent = "Too low. Try again!";
    msg.style.color = "red";
  }

  attempt.textContent = `Attempts left: ${attemptsLeft}`;


  if(attemptsLeft == 0){
    msg.textContent = `Game over! The correct number is ${targetNumber}`;
    endGame();
  }
}

function endGame(){
  button.disabled = true;
  reset.style.display = "block";
}

function resetGame(){
  targetNumber = genRandomNumber();
  attemptsLeft = 10;
  button.disabled = false;
  msg.textContent = "";
  guessInput.value = "";
  attempt.textContent = `Attempts left: ${attemptsLeft}`;
  reset.style.display = "none";
}