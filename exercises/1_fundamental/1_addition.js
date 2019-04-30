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
    if (action.type === "multiply") {
        return state * action.content
    }
    if (action.type === "add") {
        return state + action.content
    }
    return state
}

let store = new Store(reducer, 5)

// Insert your code after this line

// Insert your code before this line

if (store.state !== 7) {
    throw new Error("Expecting a state of 7 but ended up with a state of " + store.state)
}
console.log("Exercise finished")
