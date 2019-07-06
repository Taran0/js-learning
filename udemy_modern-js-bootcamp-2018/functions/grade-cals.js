// students score, total possible score
// 15/20 -> You got a C (75%) 
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59


//Andrew's solution
let studentsScore = 9

let gradeCalc = function (studentsScore, total = 20) {
    let percent = studentsScore / total * 100
    :

    if (percent >= 90){
        grade='A'
    } else if (percent >= 80){
        grade='B'
    } else if (percent >= 70){
        grade='C'
    } else if (percent >= 60){
        grade='D'
    } else {
        grade='F'
    }

    return `You got a ${grade} (${percent}%)!`
}

let message = gradeCalc(studentsScore)
console.log(message)


/*
let gradeCalc = function (score, total) {
    let percent = (score / total) * 100

    if (percent )
}
*/