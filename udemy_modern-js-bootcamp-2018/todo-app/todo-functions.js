//fetch existing todos from local storage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')
    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

//save todos to local storage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//render todos based on filters
const todoListFiltering = function (todos, filters) {
    //filterezett tömb
    const filteredTodosList = todos.filter(function (todo) {
        const searchMatch = todo.text.toLowerCase().includes(filters.search.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchMatch && hideCompletedMatch
    })

    document.querySelector('#todo-list').innerHTML = ''

    //tömb megjelenítése
    filteredTodosList.forEach(function (todo) {
        return document.querySelector('#todo-list').appendChild(createTodoDomElement(todo))
    })

    incompleteTodosCounter(todos)

    //ha nincs találat
    if (filteredTodosList.length === 0) {
        const noMatch = document.createElement('p')
        noMatch.innerHTML = 'nincs találat'
        document.querySelector('#todo-list').appendChild(noMatch)
    }
}

//remove a todo from the list
const removeTodo = function (id){
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })

    if (todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

//todo is done with checkbox check event
const todoIsDone = function (id) {
    const todo = todos.find(function(todo){
        return todo.id === id
    })

    if(todo !== undefined){
        todo.completed = !todo.completed
    }
}

//create dom elements for an individual todo
const createTodoDomElement = function (todo) {
    const todoElement = document.createElement('div')
    const chkbox = document.createElement('input')
    const text = document.createElement('span')
    const removeButton = document.createElement('button')

    //setup checkbox for a todo
    chkbox.setAttribute('type', 'checkbox')
    chkbox.checked = todo.completed
    todoElement.appendChild(chkbox)
    chkbox.addEventListener('change', function(){
        todoIsDone(todo.id)
        saveTodos(todos)
        todoListFiltering(todos, filters)
    })

    //setup text for a todo
    text.textContent = ' ' + todo.text + ' '
    todoElement.appendChild(text)

    //setup remove button for a todo
    removeButton.textContent = 'x'
    todoElement.appendChild(removeButton)
    removeButton.addEventListener('click', function(){
        removeTodo(todo.id)
        saveTodos(todos)
        todoListFiltering(todos, filters)
    })

    return todoElement
}

//get the dom elements for list summary
const incompleteTodosCounter = function (todos) {
    const incompleteTodos = todos.filter(function (todo) {
        return !todo.completed
    })
    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#incompleted-todocounter').innerHTML = ''
    document.querySelector('#incompleted-todocounter').appendChild(summary)
}