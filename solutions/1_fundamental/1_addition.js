class Store {
    constructor(red, initialState) {
        this.reducer = red
        this.state = initialState
        this.dispatch = this.dispatch.bind(this) // some magic
    }
    dispatch(dispatchedAction) { // it's not an arrow function, so we need to use the above magic. Arrow methods are not supported by nodejs.
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

store.dispatch({ type: "add", content: 1 })
store.dispatch({ type: "add", content: 1 })

// Insert your code before this line

if (store.state !== 7) {
    throw new Error("Expecting a state of 7 but ended up with a state of " + store.state)
}
console.log("Exercise finished")
