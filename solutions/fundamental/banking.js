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
    if (action.type === "withdraw") {
        return { balance: state.balance - action.content }
    }
    if (action.type === "deposit") {
        return { balance: state.balance + action.content }
    }
    return state
}

let store = createStore(reducer, 100)

store.dispatch({ type: "deposit", content: 30 })

// Insert your code after this line

store.dispatch({ type: "withdraw", content: 80 })

// Insert your code before this line 

if (store.state.balance !== 50) {
    throw new Error("expected a balance of 50 ")
}