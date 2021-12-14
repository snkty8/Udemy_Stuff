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

// const the = document.querySelectorAll('p')

// the.forEach(function (p) {
//     if (p.textContent.includes('the')) {
//         p.remove()
//     } 

// })

// You have 2 todos left (p element)
// Add a paragrah for each todo above (use text value)


const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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



// Listen for new todo
document.querySelector("#new-todo").addEventListener("click", function (e) {
    console.log('Let us see!!')
})

// Listen for todo text change
document.querySelector("#add-todos").addEventListener("input", function (e) {
    console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})