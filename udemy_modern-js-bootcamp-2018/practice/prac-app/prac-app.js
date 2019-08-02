//**LOCAL STORAGE PRACTICE */
//variables
let rows = []

//check local storage data
const rowsJSON = localStorage.getItem('rows')
if (rowsJSON !== null) {
    rows = JSON.parse(rowsJSON)
}

//rendering -> add rows to html (in p tags)
const renderNotes = function (rows) {
    document.querySelector('#rows-div').innerHTML = ''

    rows.forEach(function (row) {
        const p = document.createElement('p')
        p.textContent = row
        document.querySelector('#rows-div').appendChild(p)
    })
}
renderNotes(rows)

//eventlisteners
document.querySelector('#hozzaad-button').addEventListener('click', function (e) {
    e.preventDefault()
    rows.push(document.querySelector('#hozzaad-input').value)
    localStorage.setItem('rows', JSON.stringify(rows))
    renderNotes(rows)
    document.querySelector('#hozzaad-input').value = ''
})
//**LOCAL STORAGE PRACTICE */





const cim = document.querySelector('#title')
const alcimek = document.querySelectorAll('.alcim')

document.querySelector('#bekuld').addEventListener('click', function () {
    cim.textContent = 'ennyire egyszerű'
    alcimek.forEach(function (alcim) {
        alcim.textContent = 'ennyi vagy kisfiam.'
    })
})

document.querySelector('#input').addEventListener('input', function (e) {
    cim.textContent = e.target.value
})


document.querySelector("#one").addEventListener('input', function (e) {
    let two = document.querySelector("#two")
    let sum = document.querySelector("#sum")
    sum.value = e.target.value + two.value
})


//**DATA RENDERING */
const myNotes = [{
    title: 'Tippek',
    body: 'alsdkfjéakl'
}, {
    title: 'Trükkök',
    body: 'aédslkfj',
}, {
    title: 'Jótanácsok',
    body: 'gaédfkljé'
}]

const filters = {
    searchingText: ''
}

//render method
const dataRender = function (myNotes, filters) {
    const renderedData = myNotes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchingText.toLowerCase())
    })

    document.querySelector('#my-notes-list').innerHTML = ''

    renderedData.forEach(function (note) {
        const noteTag = document.createElement('p')
        noteTag.textContent = note.title
        document.querySelector('#my-notes-list').appendChild(noteTag)
    })
}

//searching input event listener
document.querySelector('#search-input').addEventListener('input', function (e) {
    filters.searchingText = e.target.value
    dataRender(myNotes, filters)
})

dataRender(myNotes, filters)