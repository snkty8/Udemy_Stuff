// Create an array with five todos
const todos = ['Wake up', 'Brush teeth', 'Take a shower', 'Put on shoes', 'Go to work']

//Delete 3rd item
todos.splice(2, 1)
console.log(todos)

//Add a new item to the end
todos.push('Eat lunch')
console.log(todos)

//remove the first item from the list
todos.shift()
console.log(todos)


// You have x todos
// console.log('You have ' + todos.length + ' things to do today.')
// console.log(`You have ${todos.length} todos!!`)
// Print 1 and second to last item
// console.log('To do: ' + todos[3] + ' and ' + todos[4])
// console.log(`To do: ${todos[todos.length - 2]} and ${todos[todos.length - 1]} `)