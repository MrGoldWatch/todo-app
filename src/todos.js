import uuidv4 from 'uuid/v4'

let todos = []

const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
        // return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
        // return []
    }
}

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    })
    saveTodos(todos)
}

const removeTodo = (todoId) => {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

const toggleTodo = (todoId) => {
    const todo = todos.find((todo) => todo.id === todoId)

    if (todo) {
        todo.completed = !todo.completed
        saveTodos()
    }
}

loadTodos()

export { getTodos, removeTodo, createTodo, toggleTodo, loadTodos }