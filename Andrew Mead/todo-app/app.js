const todos = [{
    text: "Order cat food",
    completed: false
}, {
    text: "Clean my room",
    completed: true
}, {
    text: "Do work",
    completed: false
}, {
    text: "buy food",
    completed: true
}, {
    text: "Exercise",
    completed: false
}]

const filters = {
    searchText: ""
}

document.querySelector("#add-new").addEventListener("click", function() {
    console.log("hi")
})

document.querySelector("#new-todo").addEventListener("input", function(e) {
    console.log(e.target.value)
})



function renderTodos (todos, filters) {

    const filteredTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector("#todos").innerHTML = ""

    const itemsLeft = filteredTodos.filter(function(todo) {
        return !todo.completed
    })
    
    let newText = document.createElement("h2")
    newText.textContent = `You have ${itemsLeft.length} items left to do!`
    document.querySelector("#todos").appendChild(newText)
    
    filteredTodos.forEach(function (todo) {
        let newTodo = document.createElement("p")
        newTodo.textContent = todo.text
        document.querySelector("#todos").appendChild(newTodo)
    })
}

renderTodos(todos, filters)

document.querySelector("#searchToDo").addEventListener("input", function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
