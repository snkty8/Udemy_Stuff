let myAccount = {
    Name: 'Sierra',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

addExpense(myAccount, 2.50)
console.log(myAccount)


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
let getAccountSummary = function (account, expense, income) {
    return`Account for ${myAccount.Name} has ${myAccount.income}. ${myAccount.expenses} in expenses.`
}

// Account for Sierra has $900. $1000 in come. $100 in expense.

resetAccount(myAccount)
console.log(myAccount)

addIncome(myAccount, 100)
console.log(myAccount)

getAccountSummary(myAccount, 7, 8)
console.log(myAccount)