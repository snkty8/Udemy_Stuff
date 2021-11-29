let myAccount = {
    Name: 'Sierra',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

// addExpense(myAccount, 2.50)
// console.log(myAccount)


// addIncome 
let addIncome = function (account, amount) {
    account.income = account.income + amount
}
// resetAccount
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

// getAccountSummary
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return`Account for ${account.Name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}

// Account for Sierra has $900. $1000 in come. $100 in expense.

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
