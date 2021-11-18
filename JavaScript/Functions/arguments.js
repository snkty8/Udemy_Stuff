// Function with multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default Arguments
let getScoreText = function (Name = 'Anonymous', score = 0) {
    return 'Name: ' + Name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge Area

// function take two arguments: total bill and tipPercent 
let getTip = function (bill = 0, tipPercent = .2) {
    totalBill = bill + (bill * tipPercent)
    return 'Total Bill: ' + totalBill
}

let grandTotal = getTip(100, .25)
console.log(grandTotal)