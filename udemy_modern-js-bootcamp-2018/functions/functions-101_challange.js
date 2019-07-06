//convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function (fahrenheit) {
    let result = (fahrenheit - 32) * 5 / 9
    return result
}

let celsius1 = convertFahrenheitToCelsius(32)
//let celsius2 = convertFahrenheitToCelsius(68)

//print the converted values
console.log(celsius1)
console.log(convertFahrenheitToCelsius(68))






































//convertFahrenheitToCelsius
let convertFahrenheitToCelsiusIsm = function(fahrenheit){
    let celsiusIsm = (fahrenheit - 32) * 5 / 9
    return celsiusIsm
}


//let celsius2 = convertFahrenheitToCelsius(68)

//print the converted values
console.log('new1: ' + convertFahrenheitToCelsiusIsm(32))
console.log('new2: ' + convertFahrenheitToCelsiusIsm(68))