const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// # grabs id
document.querySelector("#create-note").addEventListener("click", function (e) {
    console.log('Did this work?')
    console.log(e)
})

// document.querySelector("button").addEventListener("click", function (e) {
//     e.target.textContent = 'The button was clicked'
// })

// . grabs class
document.querySelector('#remove-all').addEventListener('click', function  () {
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

document.querySelector("#search-text").addEventListener("input", function (e) {
    console.log(e.target.value)
})