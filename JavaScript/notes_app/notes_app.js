let notes = []

const filters = {
    searchText: ''
}

// Check for existing saved data
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notesJSON)
}


const renderNotes = function (notes, filters) {
    const filterNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filterNotes.forEach(function (note) {
        const noteElement = document.createElement('p')

        if (note.title.length > 0) {
            noteElement.textContent = note.title
        } else { 
            noteElement.textContent = "Unnamed note"
        }

        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)

// # grabs id
document.querySelector("#create-note").addEventListener("click", function (e) {
    notes.push({
    title: '',
    body: ''
    })
    localStorage.setItem('notes', JSON.stringify(notes))
    renderNotes(notes, filters)
})


document.querySelector("#search-text").addEventListener("input", function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener("change", function (e){
    console.log(e.target.value)
})