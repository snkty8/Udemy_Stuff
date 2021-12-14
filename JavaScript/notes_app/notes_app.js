const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// DOM - Document Object Model


// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Qurey all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '*****'
    // console.log(p.textContent)
    // p.remove()
})

// Add a new element
const newParagrah = document.createElement('p')
newParagrah.textContent = 'This a new element from JavaScript'
document.querySelector('body').appendChild(newParagrah)