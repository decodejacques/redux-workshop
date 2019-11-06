class Store {
    constructor(red, initialState) {
        this.reducer = red
        this.state = initialState
    }
    dispatch(dispatchedAction){
        this.state = this.reducer(this.state, dispatchedAction)
    }
}

let reducer = function (state, action) {
    if (action.type === "withdraw") {
        return {
            balance: state.balance - action.amount,
            numTransactions: state.numTransactions + 1
        }
    }
    if (action.type === "deposit") {
        return {
            balance: state.balance + action.amount,
            numTransactions: state.numTransactions + 1
        }
    }
    if (action.type === "withdrawEverything") {
        return {
            balance: 0,
            numTransactions: state.numTransactions + 1
        }
    }

    return state
}

let store = new Store(reducer, {
    numTransactions: 0,
    balance: 0
})


// Insert your code after this line

store.dispatch({ type: "withdrawEverything" })
store.dispatch({ type: "deposit", amount: 50 })
store.dispatch({ type: "withdraw", amount: 20 })


// Insert your code before this line 

if (store.state.balance !== 30) {
    throw new Error("expected a balance of 30 but got " + this.state)
}

if (store.state.numTransactions !== 3) {
    throw new Error("Expected 3 transations")
}


console.log("Exercise finished")
