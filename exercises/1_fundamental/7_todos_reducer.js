class Store {
  constructor(red, initialState) {
    this.reducer = red;
    this.state = initialState;
  }
  dispatch(dispatchedAction) {
    this.state = this.reducer(this.state, dispatchedAction);
  }
}

// Insert your code after this line

const reducer = (state, action) => {
  switch (action.type) {
    case "new":
      return { todos: state.todos.concat(action.todo) };
    case "reverseTodos":
      return { todos: state.todos.slice().reverse() };
    case "deleteFirst":
      return { todos: state.todos.slice(1) };
    default:
      return state;
  }
};

// Insert your code before this line

let store = new Store(reducer, { todos: [] });

store.dispatch({ type: "new", todo: "Buy milk" });
store.dispatch({ type: "new", todo: "Buy eggs" });
store.dispatch({ type: "new", todo: "Learn javascript" });
store.dispatch({ type: "reverseTodos" });
store.dispatch({ type: "deleteFirst" });

if (store.state.todos.length !== 2) {
  throw new Error("Wrong number of todos");
}
console.log("Exercise finished");
