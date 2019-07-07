//Game values
let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random() * (max - min + 1) + min),
    guessesLeft = 3

//UI Elements
const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message")

//Assign UI Min max

minNum.textContent = min
maxNum.textContent = max

//Play again Event Listener
game.addEventListener("mousedown", function(e) {
  if(e.target.className === "play-again"){
    window.location.reload()
  }
})

//Event Listeners

guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  //Validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red")
  }

  //Check if won
  if(guess === winningNum){
    setMessage(`${winningNum} is correct! You win!`, "green", true)
  } else {
    guessesLeft--
    if (guessesLeft === 0) {
      setMessage(`You lose! The correct answer was ${winningNum}`, "red", true)
    } else {
      guessInput.value = ""
      setMessage(`${guess} is incorrect. You have ${guessesLeft} guesses left`, "orange")
    }

  }
})

function setMessage(msg, color, disabled = false) {
  if (disabled === true) {
    guessBtn.value = "Play Again?"
    guessBtn.className += "play-again"
  }
  guessInput.disabled = disabled
  guessInput.style.borderColor = color
  message.style.color = color
  message.textContent = msg
}
