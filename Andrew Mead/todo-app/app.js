const todos = getSavedTodos()

const filters = {
    searchText: "",
    hideCompleted: false
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
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todoText.value = ""
})

document.querySelector("#hide-todos").addEventListener("change", function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})