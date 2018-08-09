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

let store = new Store(reducer, {
    numTransactions: 0,
    balance: 0
})



store.dispatch({ type: "withdrawEverything" })
store.dispatch({ type: "deposit", amount: 50 })
store.dispatch({ type: "withdraw", amount: 20 })



if (store.state.balance !== 30) {
    throw new Error("expected a balance of 30 but got " + store.state)
}

if (store.state.numTransactions !== 3) {
    throw new Error("Expected 3 transations")
}


console.log("Exercise finished")
