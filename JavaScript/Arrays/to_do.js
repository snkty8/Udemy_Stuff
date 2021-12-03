// Create an array with five todos
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
const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

// deleteTodo(todos, 'aTake a shower')
// console.log(todos)

const getThingsTodo = function (todos) {
    return todos.filter(function (todo) {
        return todo.completed === false
    })
}

console.log(getThingsTodo(todos))

