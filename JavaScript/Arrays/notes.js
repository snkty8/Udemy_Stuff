const notes = [
    'Note 1',
    'Note 2',
    'Note 3'
]

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
notes[2] = 'this is the new note 3'

console.log(notes.length)
console.log(notes)