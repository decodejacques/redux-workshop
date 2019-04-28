class Store {
    constructor(red, initialState) {
        this.reducer = red
        this.state = initialState
    }
    dispatch = (dispatchedAction) => {
        this.state = this.reducer(this.state, dispatchedAction)
    }
}

// This is written by the programmer but I have already defined it for you
let reducer = function (state, action) {
    if (action.type === "setUsername") {
        return { ...state, username: action.name }
    }
    if (action.type === "setPassword") {
        return { ...state, password: action.pwd }
    }
    if (action.type === "setFirstName") {
        return { ...state, firstName: action.name }
    }
    if (action.type === "setLastName") {
        return { ...state, lastName: action.name }
    }
    if (action.type === "setAge") {
        return { ...state, age: action.ageInYears }
    }
    return state
}

let store = new Store(reducer, {
    username: "rob",
    password: "*&^*DHek!",
    firstName: "Rabert",
    lastName: "Dabert",
    age: 30
})

// Insert your code after this line

store.dispatch({ type: "setUsername", name: "bob" })
store.dispatch({ type: "setPassword", pwd: "password123" })
store.dispatch({ type: "setFirstName", name: "Robert" })
store.dispatch({ type: "setLastName", name: "Dobert" })
store.dispatch({ type: "setAge", ageInYears: 31 })

// Insert your code before this line 

if (store.state.username !== "bob") {
    throw new Error("Wrong username")
}
if (store.state.password !== "password123") {
    throw new Error("Wrong password")
}
if (store.state.firstName !== "Robert") {
    throw new Error("Wrong firstName")
}
if (store.state.lastName !== "Dobert") {
    throw new Error("Wrong lastName")
}
if (store.state.age !== 31) {
    throw new Error("Wrong Age")
}

console.log("Exercise finished")