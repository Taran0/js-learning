let myAccount = {
    name: 'Balázs',
    expenses: 0,
    income: 0,
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

//addIncome
let addIncome = function (account, amount){
    account.income = account.income + amount
    console.log(account)
}

//resetAccount
let resetAccount = function (account) {
    account.name = null
    account.expenses = null
    account.income = null
}

//getAccountSummary
let getAccountSummary = function (account){
    let balance = account.income - account.expenses
    console.log(`Account for ${account.name} has ${balance}, ${account.income} in income, ${account.expenses} in expenses.`)
}
//Account for Balázs has $900, 1000 in incame, 100 in expenses.

addExpense(myAccount, 2.50)
console.log(myAccount)


//használat
//addIncomer
addIncome(myAccount, 100)

//addExpense
addExpense(myAccount, 9.80)

//getAccountSummary
getAccountSummary(myAccount)

//resetAccount
resetAccount(myAccount)

//getAccountSummary
getAccountSummary(myAccount)