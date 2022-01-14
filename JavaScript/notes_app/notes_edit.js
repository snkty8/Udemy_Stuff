const notes = getSavedNotes()
const noteId = location.hash.substring(1)
const note = notes.find(function (note) {
    return note.id === noteId
})

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')

if (note === undefined) {
    location.assign('/notes_app/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    saveNotes(notes)
})

bodyElement.addEventListener('input', function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

removeElement.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/notes_app/index.html')
})

