var numInput = document.querySelector("input")
var maxScore = document.getElementById("maxScore")
var p1Button = document.getElementById("p1Button")
var p2Button = document.getElementById("p2Button")
var resetButton = document.getElementById("resetButton")
var p1Display = document.getElementById("p1Score")
var p2Display = document.getElementById("p2Score")
var p1Score = 0
var p2Score = 0
var gameOver = false
var winningScore = 5

numInput.addEventListener("change", function(){
  maxScore.textContent = numInput.value
  winningScore = parseInt(numInput.value)
  reset()
})
// maxScoreInput.addEventListener("click", function() {
//   maxScore.textContent == maxScoreInput.value
// })

function scoreUpdate(player, score){
  if (!gameOver){
    score++
    if(score === winningScore) {
      player.classList.add("winner")
      gameOver = true
    }
    player.textContent = score
  }
}

p1Button.addEventListener("click", function() {
  scoreUpdate(p1Display, p1Score)
})

p2Button.addEventListener("click", function() {
  scoreUpdate(p2Display, p2Score)
})

resetButton.addEventListener("click", function() {
  reset()
})

function reset() {
  p1Score = 0
  p2Score = 0
  gameOver = false
  p1Display.textContent = "0"
  p2Display.textContent = "0"
  p1Display.classList.remove("winner")
  p2Display.classList.remove("winner")
}
