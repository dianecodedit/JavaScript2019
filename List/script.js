let newItemCounter = 1
let listItems = document.getElementById("ourList").getElementsByTagName("li")
let headline = document.getElementById("headline")
let button = document.getElementById("button")
let list = document.getElementById("ourList")

list.addEventListener("click", activateItem)

function activateItem(e) {
  if(e.target.nodeName =="LI"){
    headline.innerHTML = e.target.innerHTML
    for (var i = 0; i < e.target.parentNode.children.length; i++) {
        e.target.parentNode.children[i].classList.remove("active")
    }
    e.target.classList.add("active")
  }
}

button.addEventListener("click", buttonClicked)

function buttonClicked() {
  list.innerHTML += "<li>Something new " +  newItemCounter +"</li>";
  newItemCounter++

}
