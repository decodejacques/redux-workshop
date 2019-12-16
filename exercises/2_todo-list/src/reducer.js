const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return { todos: state.todos.concat(action.todoItem) };
    // case "reverseTodos":
    default:
      return state;
  }
};

export default reducer;
