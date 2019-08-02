let notes = getSavedNotes()

//filters object
const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

//**EVENT LISTENEREK */
//button - új note button
document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

//input text - keresés a jegyzetek közt
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

//drop down list - sort by
document.querySelector('#sort-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

//data syncing a local data alapján
window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        //parse the correct data, update notes
        notes = JSON.parse(e.newValue)

        //rerender notes
        renderNotes(notes, filters)
    }
})
//**EVENT LISTENEREK */


