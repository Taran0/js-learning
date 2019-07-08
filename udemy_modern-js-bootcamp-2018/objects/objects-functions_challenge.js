//fahrenheit in -> return with fahrenheit, celsius, and kelvin
/*
let fahrenheit = 45

let komplexTempConverter = function (tempToConvert){
    let celsius = (tempToConvert - 32) * 5 / 9
    let kelvin = celsius + 273.15

    return {
        fahrenheit: tempToConvert,
        celsius: celsius,
        kelvin: kelvin
    }
}

let temps = komplexTempConverter(fahrenheit)
console.log(temps)
*/





































//fahrenheit in -> return with fahrenheit, celsius, and kelvin
let convert = function (fahrenheit){
    return {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
        kelvin: ((fahrenheit - 32) * 5 / 9) + 273.15
    }
}

console.log(convert(55))
