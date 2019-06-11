var numSquares = 6
var colours = []
var pickedColour
var squares = document.querySelectorAll(".square")
var colourDisplay = document.getElementById("colourDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode")

init()

function init() {
  //mode buttons event listeners
  setupModeButtons()
  //add event listeners to squares
  setupSquares()

  reset()
}
function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected")
      modeButtons[1].classList.remove("selected")
      this.classList.add("selected")
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6
      reset()
    })
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      var clickedColour = this.style.backgroundColor
      if (clickedColour === pickedColour) {
        messageDisplay.textContent = "Correct!"
        changeColours(pickedColour)
        h1.style.backgroundColor = pickedColour
        resetButton.textContent = "Play Again?"
      } else {
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "Try Again"
      }
    })

  }
}

function reset() {
  colours = generateRandomColours(numSquares)
  pickedColour = pickColour()
  colourDisplay.textContent = pickedColour
  messageDisplay.textContent = ""
  h1.style.backgroundColor = "steelblue"
  resetButton.textContent = "New Colours"
  for (var i = 0; i < squares.length; i++) {
    if (colours[i]){
      squares[i].style.display = "block"
      squares[i].style.backgroundColor = colours[i]
    } else {
      squares[i].style.display = "none"
    }
  }
}

resetButton.addEventListener("click", function() {
reset()
})

function changeColours (color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color
  }
}

function pickColour () {
  var random =  Math.floor(Math.random()*colours.length)
  return colours[random]
}

function generateRandomColours(num) {
  var colourArr = []
  for (var i = 0; i < num; i++){
    colourArr.push(randomNumber())
  }
  return colourArr
}

function randomNumber() {
  var r = Math.floor(Math.random()*256)
  var g = Math.floor(Math.random()*256)
  var b = Math.floor(Math.random()*256)
  return `rgb(${r}, ${g}, ${b})`
}
