let createStore = function (reducer, initialState) {
    let store = {
        state: initialState
    }
    let disp = function (dispatchedAction) {
        store.state = reducer(store.state, dispatchedAction)
    }
    store.dispatch = disp
    return store
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

let store = createStore(reducer, initialState)

// Insert your code after this line

store.dispatch({ type: "addTodo", content: "Buy milk" })
store.dispatch({ type: "addTodo", content: "Buy eggs" })

// Insert your code before this line 


if (store.state.todos.length !== 2) {
    throw new Error("wrong length")
}