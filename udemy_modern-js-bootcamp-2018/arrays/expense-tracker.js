const account = {
    name: 'Balázs Farkas', 
    incomes: [],
    expenses: [],
    addIncome: function(description, amount){
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalExpenses = 0
        let totalIncomes = 0
        let totalBalance = 0
        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })
        this.incomes.forEach(function(income){
            totalIncomes = totalIncomes + income.amount
        })
        totalBalance = totalIncomes - totalExpenses
        return `${this.name} has a ${totalBalance} in balance, 
            ${totalExpenses} in expenses and ${totalIncomes} in incomes`
    }
}

//**CHALLANGE - PART1 */
//expense -> description, amount(db)
//addExpense -> 2arg: description, amount
//getAccountSummary -> total up all expenses -> 'balázs has $1250 in expense'

//**CHALLANGE - PART2 */
//add income array
//addIncome method -> description, amount
//tweak getAccountSummory -> Balázs has a balance of $10, 100$ in income
//and 50 in expnse

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addExpense('Catfood', 15)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())


