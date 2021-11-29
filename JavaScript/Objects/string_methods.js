let Name = '   Sierra   '

//Length property
console.log(Name.length)

//convert to uppercase
console.log(Name.toUpperCase())

//convert to lower case
console.log(Name.toLowerCase())

// Inclues Method
let password = 'abc123ada098'
console.log(password.includes('password'))

// Trim method
console.log(Name.trim())

// challenge area
//length is more than 8 and does not contain password
let isValidPassword = function (password) {
    return password.length >= 8 && !password.includes('password')
    }
console.log(isValidPassword('adafd'))
console.log(isValidPassword('adafd1232'))
console.log(isValidPassword('adafdpassword'))