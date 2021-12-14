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

const newParagrah = document.createElement('p')
newParagrah.textContent = 'You still have 2 todos for the day'
document.querySelector('body').appendChild(newParagrah)