document.addEventListener("DOMContentLoaded", () => {
  const guessInput = document.getElementById("guess-input");
  const guessBtn = document.getElementById("guess-btn");
  const message = document.getElementById("message");
  const guessesSpan = document.getElementById("guesses");
  const attemptsSpan = document.getElementById("attempts");
  const restartBtn = document.getElementById("restart-btn");

  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let attemptsLeft = 10;
  let guesses = [];

  function resetGame() {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      attemptsLeft = 10;
      guesses = [];
      guessInput.value = "";
      guessInput.disabled = false;
      guessBtn.disabled = false;
      restartBtn.classList.add("hidden");
      message.textContent = "You have 10 attempts left.";
      guessesSpan.textContent = "";
      attemptsSpan.textContent = "10";
  }

  function checkGuess() {
      const guess = Number(guessInput.value);
      if (!guess || guess < 1 || guess > 100) {
          message.textContent = "Please enter a valid number between 1 and 100.";
          return;
      }

      guesses.push(guess);
      guessesSpan.textContent = guesses.join(", ");
      attemptsLeft--;
      attemptsSpan.textContent = attemptsLeft;

      if (guess === randomNumber) {
          message.textContent = `🎉 Congratulations! You guessed the correct number ${randomNumber}.`;
          guessInput.disabled = true;
          guessBtn.disabled = true;
          restartBtn.classList.remove("hidden");
      } else if (attemptsLeft === 0) {
          message.textContent = `😢 Game Over! The correct number was ${randomNumber}.`;
          guessInput.disabled = true;
          guessBtn.disabled = true;
          restartBtn.classList.remove("hidden");
      } else {
          message.textContent = guess < randomNumber 
              ? "Too low! Try again." 
              : "Too high! Try again.";
      }

      guessInput.value = "";
  }

  guessBtn.addEventListener("click", checkGuess);
  restartBtn.addEventListener("click", resetGame);
});
