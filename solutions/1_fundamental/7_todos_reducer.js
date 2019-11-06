class Store {
    constructor(red, initialState) {
        this.reducer = red
        this.state = initialState
    }
    dispatch(dispatchedAction) {
        this.state = this.reducer(this.state, dispatchedAction)
    }
}

let reducer = function (state, action) {
    if (action.type === "new") {
        return { todos: state.todos.concat(action.todo) }
    }
    if (action.type === "reverseTodos") {
        let todosCopy = state.todos.slice()
        return { todos: todosCopy.reverse() }
    }
    if (action.type === "deleteFirst") {
        return { todos: state.todos.slice(1) }
    }
    return state
}

let store = new Store(reducer, { todos: [] })

// Insert your code after this line

store.dispatch({ type: "new", todo: "Buy milk" })
store.dispatch({ type: "new", todo: "Buy eggs" })
store.dispatch({ type: "new", todo: "Learn javascript" })
store.dispatch({ type: "reverseTodos" })
store.dispatch({ type: "deleteFirst" })

// Insert your code before this line 


if (store.state.todos.length !== 2) {
    throw new Error("Wrong number of todos")
}
console.log("Exercise finished")
