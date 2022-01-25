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

// Unix Epoch - Janurary 1st 1970 00:00:00

const now = new Date()
const timeStamp = now.getTime()

const myDate = new Date(timeStamp)
console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of Month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)


const dateOne = new Date('March 1 2018 12:00:00')
const dateTwo = new Date()

const dateOneTimeStamp = dateOne.getTime()
const dateTwoTimeStamp = dateTwo.getTime()

if (dateOneTimeStamp < dateTwoTimeStamp) {
    console.log(dateOne.toString())
} else if (dateTwoTimeStamp < dateOneTimeStamp) {
    console.log(dateTwo.toString())
}