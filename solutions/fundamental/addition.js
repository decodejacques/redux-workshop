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
    if (action.type === "multiply") {
        return state * action.content
    }
    if (action.type === "add") {
        return state + action.content
    }
    return state
}

let store = createStore(reducer, 5)

// Insert your code after this line

store.dispatch({type: "add", content: 1})
store.dispatch({type: "add", content: 1})

// Insert your code before this line

if(store.state !== 7) {
    throw new Error("wrong state")
}