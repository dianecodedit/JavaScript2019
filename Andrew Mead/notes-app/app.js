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

document.querySelector("#remove-note").addEventListener("click", function() {
    document.querySelectorAll(".note").forEach(function(note) {
        note.remove()
    })
})

document.querySelector("#search-text").addEventListener("input", function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})