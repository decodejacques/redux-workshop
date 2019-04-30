class Store {
    constructor(red, initialState) {
        this.reducer = red
        this.state = initialState
    }
    dispatch(dispatchedAction) {
        this.state = this.reducer(this.state, dispatchedAction)
    }
}

// Insert your code after this line

// Insert your code before this line


let store = new Store(reducer, 5)


store.dispatch({ type: "subtraction", content: 3 })
store.dispatch({ type: "multiplication", content: 2 })
store.dispatch({ type: "addition", content: 2 })



if (store.state !== 6) {
    throw new Error("Expecting a state of 6 but ended up with a state of " + store.state)
}
console.log("Exercise finished")
