class Store {
    constructor(red, initialState) {
        this.reducer = red
        this.state = initialState
    }
    dispatch = (dispatchedAction) => {
        this.state = this.reducer(this.state, dispatchedAction)
    }
}

let reducer = function (state, action) {
    if (action.type === "clearList") {
        return { todos: todos }
    }
    if (action.type === "addTodo") {
        return { todos: state.todos.concat(action.content) }
    }
    return state
}

let store = new Store(reducer, { todos: [] })

// Insert your code after this line

store.dispatch({ type: "addTodo", content: "Buy milk" })
store.dispatch({ type: "addTodo", content: "Buy eggs" })

// Insert your code before this line 


if (store.state.todos.length !== 2) {
    throw new Error("Wrong number of todos")
}
console.log("Exercise finished")