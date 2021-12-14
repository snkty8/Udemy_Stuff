const todos = [{
    text: 'Wake up',
    completed: true
}, {
    text: 'Brush teeth',
    completed: false
}, {
    text: 'Take a shower',
    completed: false
}, {
    text: 'Put on shoes',
    completed: false
}, {
    text: 'Go to work',
    completed: true
}]

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodos = filteredTodos.filter(function (todo) {
        return !filters.hideCompleted || !todo.completed
        // if (filters.hideCompleted) {
        //     return !todo.completed
        // } else {
        //     return true
        // }
    })

    const inCompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    
    const summary = document.createElement('h2')
    summary.textContent = `You have ${inCompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
})
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})


document.querySelector('#name-form').addEventListener("submit", function(e) {
    e.preventDefault()
    todos.push({
        text: e.target.elements.firstTodo.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.firstTodo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})