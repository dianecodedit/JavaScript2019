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
    searchText: "",
    hideCompleted: false
}


function renderTodos (todos, filters) {

    let filteredTodos = todos.filter(function(todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())    
        const hideCompletedMatch = filters.hideCompleted?!todo.completed:true
        return searchTextMatch && hideCompletedMatch
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

document.querySelector("#addTodo").addEventListener("submit", function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.todoText.value, 
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.todoText.value = ""
})

document.querySelector("#hide-todos").addEventListener("change", function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})