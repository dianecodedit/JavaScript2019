const getSavedTodos = function() {
    const todoLocal = localStorage.getItem("todos")

    if (todoLocal != null) {
       return JSON.parse(todoLocal)
    } else {
        return []
    }
}

const saveTodos = function(todos) {
    localStorage.setItem("todos", JSON.stringify(todos))
}

const renderTodos = function (todos, filters) {

    let filteredTodos = todos.filter(function(todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())    
        const hideCompletedMatch = filters.hideCompleted?!todo.completed:true
        debugger
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed
    })

    document.querySelector("#todos").innerHTML = ""
    document.querySelector("#todos").appendChild(generateSummaryDOM(incompleteTodos))
    
    filteredTodos.forEach(function (todo) {
        document.querySelector("#todos").appendChild(generateTodoDOM(todo))
    })
}

const generateTodoDOM = function (todo) {
    let p = document.createElement("p")
    p.textContent = todo.text
    return p
}

const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement("h2")
    summary.textContent = `You have ${incompleteTodos.length} items left to do!`
    return summary
}