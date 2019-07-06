//total, tipPercent .1
//my solution
let billCalculator = function (pay, tipPercent = .1) {
    let total = pay * (1 + tipPercent)
    return total
}

console.log(`A számla végösszege: ${billCalculator(1000)}`)

/*
//Andrew's solution
let getTip = function (total, tipPercent = .1) {
    return total * tipPercent
}

let tip = getTip(100, .2)
console.log(tip)
*/





