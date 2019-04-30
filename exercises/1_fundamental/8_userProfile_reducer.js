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
    username: "rob",
    password: "*&^*DHek!",
    firstName: "Rabert",
    lastName: "Dabert",
    age: 30
})


store.dispatch({ type: "setUsername", name: "bob" })
store.dispatch({ type: "setPassword", pwd: "password123" })
store.dispatch({ type: "setFirstName", name: "Robert" })
store.dispatch({ type: "setLastName", name: "Dobert" })
store.dispatch({ type: "setAge", ageInYears: 31 })


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
