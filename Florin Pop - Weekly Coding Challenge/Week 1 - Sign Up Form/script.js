var button = document.querySelectorAll(".changeScreen")
var pages = document.querySelectorAll(".container")

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    pages.classList.toggle("hidden")
  })
}
