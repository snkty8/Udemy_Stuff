const account = {
    Name: 'Sierra',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        let totalBalance = 0
        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function (income) {
            totalIncome = totalIncome + income.amount
        })

        totalBalance = totalIncome - totalExpenses 

        return `${this.Name} has $${totalBalance}. $${totalIncome} in income, and $${totalExpenses} in expenses. `
    }
}
// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Sierra has $1250 in expenses.
// add an income array to account
// setup and addIncome method -> description and amount
// tweak getAccoutSummary
// Sierra a balance of $10. $100 income. $90 in expenses.

account.addExpense('Rent', 950)
account.addExpense('coffee', 2.50)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())