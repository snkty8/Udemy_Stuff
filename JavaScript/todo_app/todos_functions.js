// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    return todosJSON ? JSON.parse(todosJSON) : []
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    
        return searchTextMatch && hideCompletedMatch
    })



    const inCompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(getSummaryDOM(inCompleteTodos))

    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1 ) {
        todos.splice(todoIndex, 1)
    }
}

// Create toggle for check box
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
        const todoElement = document.createElement('div')
        const checkBox = document.createElement('input')
        const todoText = document.createElement('span')
        const removeButton = document.createElement('button')

        // Setup todo check box
        checkBox.setAttribute('type', 'checkbox')
        checkBox.checked = todo.completed
        todoElement.appendChild(checkBox)
        checkBox.addEventListener('change', () => {
            toggleTodo(todo.id)
            saveTodos(todos)
            renderTodos(todos, filters)
        })

        //Setup the todo text
        todoText.textContent = todo.text
        todoElement.appendChild(todoText)

        //Setup the remove button
        removeButton.textContent = 'x'
        todoElement.appendChild(removeButton)
        removeButton.addEventListener("click", () => {
            removeTodo(todo.id)
            saveTodos(todos)
            renderTodos(todos, filters)
        })
                
        return todoElement
}

// Get the DOM elements for list summary
const getSummaryDOM = (inCompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${inCompleteTodos.length} todos left`
    return summary
}