// Create an array with five todos
const todos = ['Wake up', 'Brush teeth', 'Take a shower', 'Put on shoes', 'Go to work']

// //Delete 3rd item
// todos.splice(2, 1)
// console.log(todos)

// //Add a new item to the end
// todos.push('Eat lunch')
// console.log(todos)

// //remove the first item from the list
// todos.shift()
// console.log(todos)


// You have x todos
// console.log('You have ' + todos.length + ' things to do today.')
console.log(`You have ${todos.length} todos!!`)
// Print 1 and second to last item
// console.log('To do: ' + todos[3] + ' and ' + todos[4])
// console.log(`To do: ${todos[todos.length - 2]} and ${todos[todos.length - 1]} `)

// 1. stuff
// 2. more stuff

// Passing a function in a functuin is called a call back function
todos.forEach(function (item, index) {
    const num = index + 1
    console.log(`${num}. ${item}`)
})

for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    console.log(`${num}. ${todos[count]}`)
}