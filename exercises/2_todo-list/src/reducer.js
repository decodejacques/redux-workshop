const reducer = (state, action) => {
  switch (action.type) {
    case "addTodo":
      return { todos: state.todos.concat(action.todoItem) };
    case "reverseTodos":
      return { todos: state.todos.slice().reverse() };
    default:
      return state;
  }
};

export default reducer;
