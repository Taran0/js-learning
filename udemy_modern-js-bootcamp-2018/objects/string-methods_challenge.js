/*
//isValid password
//lenght more than 8 - doesnt contain password word

let isValidPassword = function (password){
    let valid = false

    if(password.length > 8) {
        valid = true
    }

    if(password.includes('password')){
        valid = false
    }

    return valid
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!fllkjgwokjdf'))
console.log(isValidPassword('asdfppassword'))
*/

/*
//Andrew's solution1
let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')){
        return true
    }
    else {
        return false
    }
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!fllkjgwokjdf'))
console.log(isValidPassword('asdfppassword'))
*/

//Andrew's solution2
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!fllkjgwokjdf'))
console.log(isValidPassword('asdfppassword'))


