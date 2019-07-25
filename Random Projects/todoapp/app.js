let fName = document.querySelector("#firstName"),
    lName = document.querySelector("#lastName"),
    submitBtn = document.querySelector("#submit"),
    lameForm = document.querySelector("#lameForm")


lameForm.addEventListener("submit", function(e) {
    e.preventDefault()
    localStorage.setItem("First Name", fName.value)

})

let nameOutput = localStorage.getItem("First Name")

let p = document.createElement("p")
p.appendChild(nameOutput)
document.querySelector(".output").appendChild(p)