const notes = [{
    title : "my next trip",
    body: "I would like to go to Spain"
},{
    title: "Habits to work on",
    body: "Exercise. Eating a bit better"
}, {
    title: "Office and modification",
    body: "Get a new chair"
}]

const filters = {
    searchText: ""
}

// const user = {
//     name: "Diane",
//     age: 28
// }

// const userJSON = JSON.stringify(user)

// console.log(userJSON)
// localStorage.setItem("user", userJSON)

const userJSON = localStorage.getItem("user")
const user = JSON.parse(userJSON)

console.log(user.name)

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector("#notes").innerHTML = ""

    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement("p")
        noteElement.textContent = note.title
        document.querySelector("#notes").appendChild(noteElement)
    })
}

renderNotes(notes, filters)

document.querySelector("#create-note").addEventListener("click", function(e) {
    console.log("create note")    
})

document.querySelector("#search-text").addEventListener("input", function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener("change", function(e) {
    console.log(e.target.value)
})