let greetUser = function () {
    console.log('Welcome User')
}

greetUser()

let square = function(num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge area

// convert F to C

let FarenheitToCelcius = function(F) {
    let C = (F-32)*(5/9)
    return C
}

let valueTwo = FarenheitToCelcius(68)
let valueThree = FarenheitToCelcius(20)
console.log(valueTwo)
console.log(valueThree)