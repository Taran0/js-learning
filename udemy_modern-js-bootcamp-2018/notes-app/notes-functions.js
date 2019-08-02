//read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Save notes to LocalStorage
const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//remove a note from the list
const removeNote = function(id){
    const noteIndex = notes.findIndex(function (note){
        return note.id = id
    })

    if(noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

//generate teh DOM structure for a note
const generateNoteDOM = function (note) {
    const noteElement = document.createElement('div')
    const textElement = document.createElement('a')
    const button = document.createElement('button')
    const createdAt = document.createElement('span')
    const updatedAt = document.createElement('span')

    //setup the remove button
    button.textContent = 'x'
    noteElement.appendChild(button)
    button.addEventListener('click', function(){
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    //setup the note title text    
    if (note.title.length > 0) {
        textElement.textContent = note.title
    } else {
        textElement.textContent = 'unnamed note'        
    }
    textElement.setAttribute('href', `/edit.html#${note.id}`)
    noteElement.appendChild(textElement)

    //setup createdAt element
    createdAt.textContent = ' | Created: ' + moment(note.createdAt).format('YYYY. MMM. D. HH:mm')
    noteElement.appendChild(createdAt)  
    
    //setup updated element
    updatedAt.textContent = ' | ' + generateLastEdited(note.updatedAt)
    noteElement.appendChild(updatedAt)

    return noteElement
}

// sort your notes by one of three ways
const sortNotes = function(notes, sortBy){
    if(sortBy === 'byEdited'){
        return notes.sort(function(a, b){
            if (a.updatedAt > b.updatedAt){
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function(a, b){
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt){
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy == 'alphabetical') {
        return notes.sort(function(a,b){
            if (a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            } else {
                return 0
            }
        })
    }
}

//render application notes
const renderNotes = function (notes, filters) {
    notes = sortNotes(notes, filters.sortBy)

    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    //törlő fv
    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })    
}

//generate the last edited massage
const generateLastEdited = function(timestamp){
    return `Last edited ${moment(timestamp).fromNow()}`
}

