









//**CONTENT *///**CONTENT *///**CONTENT *///**CONTENT *///**CONTENT *//
//**FILTERING ARRAYS */ 
//**SORTING ARRAYS */
    //objektumlista string tuljának rendezése betűrendben
//**CONTENT *///**CONTENT *///**CONTENT *///**CONTENT *///**CONTENT *//





//**FILTERING ARRAYS */
/*
const notes = [{
    title: 'Note 1',
    body: 'tapatózis'
}, {
    title: 'Note 2',
    body: 'iszkakó'
}, {
    title: 'Note 3',
    body: 'lakravalaka'
}]

//több találatos tömbbeli keresés
//.filter(funcstion(arg1, arg2))
//forEach szerűen viselkedik
//arg1: egy obj a listában
//index: adott vizsgált elem index
//return: array, azon listaelemek tömbje ahl a belső fv igazzal tért vissza
const filteredNotes = notes.filter(function(note, index){
    const isTitleMatch = note.title.toLowerCase().includes('1')
    const isBodyMatch = note.body.toLowerCase().includes('i')
    return isTitleMatch || isBodyMatch
})
console.log(filteredNotes)

//kiszedve a beégeetett query-t
const findNotes = function(notes, query){
    return notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}
console.log(findNotes(notes, 'k'))
*/
//**FILTERING ARRAYS */






//**SORTING ARRAYS */
/*
//objektumlista string tuljának rendezése betűrendben
const notes = [{
    title: 'napi rutin',
    body: 'tapatózis'
}, {
    title: 'balázs nap',
    body: 'iszkakó'
}, {
    title: 'ajándékozás',
    body: 'lakravalaka'
}]
console.log(notes)

const sortNotes = function (notes) {
    notes.sort(function(a, b){
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}
sortNotes(notes)
console.log(notes)
*/
//**SORTING ARRAYS */














/*
console.log(notes.pop()) 
notes.push('My new note')

console.log(notes.shift())
notes.unshift('My first note')

notes.splice(0, 1, 'This is the new first item')
*/



/*
notes.forEach(function (item, index){
    console.log(index + '. ' + item)
})
*/




/*
//counting... 1
for(let count = 0; count <= 5; count++){
    console.log(count)
}

for(let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
}

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })

    return notes[index]
}
*/











/*
//minden egyes tömbelem kiiratása
notes.forEach(function(item){
    console.log(item)
})
*/


/*
//cím alapján keresés a tömbben
const findNote = function (notes, noteTitle) {
    return notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    }
    )
    
}
const note = findNote(notes, 'note 3')
console.log(note)
*/

/*
console.log(notes.length)
console.log(notes)

const index = notes.findIndex(function(note, index){
    console.log(note)
    return note.title === 'Note 2 '
})

console.log(index)
*/


 