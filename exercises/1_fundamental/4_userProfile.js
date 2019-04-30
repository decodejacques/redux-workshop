class Store {
    constructor(red, initialState) {
        this.reducer = red
        this.state = initialState
    }
    dispatch(dispatchedAction) {
        this.state = this.reducer(this.state, dispatchedAction)
    }
}

// This is written by the programmer but I have already defined it for you
let reducer = function (state, action) {
    if (action.type === "setEmail") {
        return { ...state, email: action.content }
    }
    if (action.type === "setAddress") {
        return { ...state, address: action.content }
    }
    if (action.type === "setBirthdate") {
        return { ...state, birthdate: action.content }
    }
    return state
}

let store = new Store(reducer, {})

store.dispatch({ type: "setEmail", content: "bob@yahoo.com" })

// Insert your code after this line

// Insert your code before this line 

if (store.state.email !== "bob@yahoo.co.jp") {
    throw new Error("Wrong email")
}
if (store.state.address !== "123 elm street") {
    throw new Error("Wrong address")
}
if (store.state.birthdate !== "5/6/1980") {
    throw new Error("Wrong address")
}

console.log("Exercise finished")
