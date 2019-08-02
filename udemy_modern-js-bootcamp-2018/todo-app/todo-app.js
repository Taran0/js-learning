//todo tömb
const todos = getSavedTodos()

//filterek
const filters = {
    search: '',
    hideCompleted: false
}

//**DYNAMIC CONTENT*/
incompleteTodosCounter(todos)
todoListFiltering(todos, filters)


//**EVENT LISTENERS */
//todo-search input
document.querySelector('#task-filter').addEventListener('input', function (e) {
    filters.search = e.target.value
    todoListFiltering(todos, filters)
})

//add new todo element with form
document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.newTodo.value,
        completed: false
    })
    saveTodos(todos)
    todoListFiltering(todos, filters)
    e.target.elements.newTodo.value = ''
})

//hide completed todos checkbox
document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    todoListFiltering(todos, filters)
})
//**EVENT LISTENERS */