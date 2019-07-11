//**SORTING ARRAYS */
const todos = [{
    text: 'adocheck',
    completed: false
}, {
    text: 'takarít',
    completed: false
}, {
    text: 'jsarrays',
    completed: true
}, {
    text: 'kltsgvetesxls',
    completed: false
}, {
    text: 'sleep',
    completed: true
}]
console.log(todos)


//előrevenni az el nem készülteket
const sortTodos = function(todos){
    todos.sort(function(a, b){
        if(!a.completed && b.completed){
            return -1
        }else if(a.completed && !b.completed){
            return 1
        }else{
            return 0
        }
    })
}
sortTodos(todos)
console.log(todos)

//**SORTING ARRAYS */






//**CONTENT *///**CONTENT *///**CONTENT *///**CONTENT *///**CONTENT *//
//**REMOVE TEXT BY VALUE */
//**CSAK A KÉSZEKET VÁLASZTJA KI */
//**CONTENT *///**CONTENT *///**CONTENT *///**CONTENT *///**CONTENT *//







//**CSAK A KÉSZEKET VÁLASZTJA KI */
/*
const todos = [{
    text: 'adocheck',
    completed: false
}, {
    text: 'takarít',
    completed: false
}, {
    text: 'jsarrays',
    completed: true
}, {
    text: 'kltsgvetesxls',
    completed: false
}, {
    text: 'sleep',
    completed: true
}]

const getThingsTodo = function(todoList) {
    return todoList.filter(function(todoItem) {
        return todoItem.completed        
    })
}
console.log(getThingsTodo(todos))
*/
//**CSAK A KÉSZEKET VÁLASSZA KI */






//**REMOVE TEXT BY VALUE */
/*
const todos = [{
    text: 'adocheck',
    completed: false
}, {
    text: 'takarít',
    completed: false
}, {
    text: 'jsarrays',
    completed: true
}, {
    text: 'kltsgvetesxls',
    completed: false
}, {
    text: 'sleep',
    completed: true
}]

const deleteTodo = function(todos, searchedText){
    const searchedIndex = todos.findIndex(function(item){
        return item.text.toLowerCase() === searchedText.toLowerCase()
    })
    if (searchedIndex > -1) {
        todos.splice(searchedIndex, 1)
    }    
}

deleteTodo(todos, 'Sleep')
console.log(todos)
*/
//**REMOVE TEXT BY VALUE */






/*
const deleteTodo = function (todos, searchedText){
    const index = todos.findIndex(function(todo, index){
        return todo.text.toLowerCase() === searchedText.toLowerCase()
    })

    todos.splice(index,1)    
}
*/
