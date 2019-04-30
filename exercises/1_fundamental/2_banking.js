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
    if (action.type === "withdraw") {
        return state - action.content
    }
    if (action.type === "deposit") {
        return state + action.content
    }
    return state
}

let store = new Store(reducer, 100)

store.dispatch({ type: "deposit", content: 30 })

// Insert your code after this line

// Insert your code before this line 

if (store.state !== 50) {
    throw new Error("expected a balance of 50 but got " + store.state)
}

console.log("Exercise finished")
