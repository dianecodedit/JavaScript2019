var numSquares = 6
var colours = generateRandomColours(numSquares)
var squares = document.querySelectorAll(".square")
var pickedColour = pickColour()
var colourDisplay = document.getElementById("colourDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easybtn")
var hardBtn = document.querySelector("#hardbtn")


easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected")
  hardBtn.classList.remove("selected")
  numSquares = 3
  colours = generateRandomColours(numSquares)
  pickedColour = pickColour()
  colourDisplay.textContent = pickedColour
  for (var i = 0; i < squares.length; i++) {
    if (colours[i]){
      squares[i].style.backgroundColor = colours[i]
    } else {
      squares[i].style.display = "none"
    }
  }
  messageDisplay.textContent = ""
  h1.style.backgroundColor = "steelblue"
    resetButton.textContent = "New Colours"
})

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected")
  easyBtn.classList.remove("selected")
  numSquares = 6
  colours = generateRandomColours(numSquares)
  pickedColour = pickColour()
  colourDisplay.textContent = pickedColour
  for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colours[i]
      squares[i].style.display = "block"
  }
  messageDisplay.textContent = ""
  h1.style.backgroundColor = "steelblue"
    resetButton.textContent = "New Colours"
})



resetButton.addEventListener("click", function() {
  resetButton.textContent = "New Colours"
  colours = generateRandomColours(numSquares)
  pickedColour = pickColour()
  colourDisplay.textContent = pickedColour
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colours[i]
  }
  messageDisplay.textContent = ""
  h1.style.backgroundColor = "steelblue"
})

colourDisplay.textContent = pickedColour

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colours[i]

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
