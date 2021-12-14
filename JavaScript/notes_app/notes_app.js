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


const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filterNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filterNotes.forEach(function (note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

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
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})