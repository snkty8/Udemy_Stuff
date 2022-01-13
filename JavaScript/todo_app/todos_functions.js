// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    
        return searchTextMatch && hideCompletedMatch
    })


    const inCompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(getSummaryDOM(inCompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM elements for an individual note
const generateTodoDOM =  function (todo) {
        const todoElement = document.createElement('div')
        const checkBox = document.createElement('input')
        const todoText = document.createElement('span')
        const removeButton = document.createElement('button')

        // Setup todo check box
        checkBox.setAttribute('type', 'checkbox')
        todoElement.appendChild(checkBox)

        //Setup the todo text
        todoText.textContent = todo.text
        todoElement.appendChild(todoText)

        //Setup the remove button
        removeButton.textContent = 'x'
        todoElement.appendChild(removeButton)
                
        return todoElement
}

// Get the DOM elements for list summary
const getSummaryDOM = function (inCompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${inCompleteTodos.length} todos left`
    return summary
}