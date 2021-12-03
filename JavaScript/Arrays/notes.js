const notes = [{}, {
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

//Pop: remove from the array
// console.log(notes.pop())

// // //Push: add to the array
// notes.push('my new note')

// //Shift: remove 1st item
// console.log(notes.shift())

// //Unshift: add to the beginning
// notes.unshift('my first note')

//splice: for below: start at index 1 and remove 1 item
// notes.splice(1, 1)
// add an item any where in the list
// notes.splice(1, 1, 'This is the new second item')

//Can use indexing to replace an item
// notes[2] = 'this is the new note 3'

//For Each
// Passing a function in a functuin is called a call back function
// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
// })

console.log(notes.length)
console.log(notes)

// // Counting ...1
// //set count variable, then add condition, check the count
// for (let count = 2; count >= 0; count --) {
//     console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }

const index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'Habits to work on'
})

console.log(index)