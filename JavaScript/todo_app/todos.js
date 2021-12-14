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


const inCompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${inCompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})


document.querySelector("button").addEventListener("click", function (e) {
    console.log('Let us see!!')
})