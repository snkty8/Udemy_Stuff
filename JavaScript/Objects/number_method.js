let num = 7.17

// console.log(num.toFixed())

// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(randomNum)


// Challenge Area
// guess between 1 and 5
// true if correct and false if not correct

let makeGuess = function (num) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return num === randomNum
}

console.log(makeGuess(5))
