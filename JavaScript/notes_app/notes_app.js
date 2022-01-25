let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

// # grabs id
document.querySelector("#create-note").addEventListener("click", function (e) {
    const id = uuidv4()

    notes.push({
    id: id,    
    title: '',
    body: ''
    })
    saveNotes(notes)
    location.assign(`/notes_app/edit.html#${id}`)
})


document.querySelector("#search-text").addEventListener("input", function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener("change", function (e){
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

const now = moment()
now.subtract(1, 'week').subtract(20, 'days')
console.log(now.format('MMMM Do YYYY'))
console.log(now.fromNow())
const nowTimeStamp = now.valueOf()
console.log(moment(nowTimeStamp).toString())

const today = moment()
today.subtract(37, 'years').add(6,'months').subtract(8, 'days')
console.log(today.format('MMM, D YYYY'))