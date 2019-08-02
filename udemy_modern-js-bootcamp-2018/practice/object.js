const jul17 = {
    title: 'The first Running',
    workTime: 8,
    learnTime: 2,   
    training: 'running',
    extraTask: 'napernyőállvány festés'

}

const jul16 = {
    title: 'Kigazolás',
    workTime: 8.5,
    learnTime: 0.5,
    training: null,
    extraTask: 'fenti terasz gazolás, télikert ablakkeret festés'
}

const sumTime = function(obj){
    return obj.workTime + obj.learnTime
}

const sumtimeV = sumTime(jul16)
const st2 = jul16.workTime + jul16.learnTime

console.log(sumtimeV)
console.log(st2)
