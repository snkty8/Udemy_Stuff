// have to use ``

let Name = 'Sierra'
let age = 36
console.log(`Hey my name is ${Name}! I am ${age} years old.`)

let getScoreText = function (Name = 'Anonymous', score = 0) {
    return `Name: ${Name} - Score: ${score}`
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


// Challenge Area

let getTip = function (bill = 0, tipPercent = .2) {
    let totalBill = bill + (tipPercent*100)
    let tip = tipPercent *100
    return `Bill: $${bill} -  Tip: ${tip}% -  Grand Total: $${totalBill}`
}

let grandTotal = getTip(75, .1)
console.log(grandTotal)

