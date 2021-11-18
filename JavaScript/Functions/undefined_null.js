// Undefined for variable

let Name  = 'Jen'

if (Name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(Name)
}


// Undefined for function arguments
// Undefined as function return default value
let square = function (num) {
    console.log(num)
}

let result = square()
console.log(result) 

// Null as assigned value, undefined is a default in JavaScript
let age = 27

age = null

console.log(age)

