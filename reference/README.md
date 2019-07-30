# Integrating redux into react

1. Install the `redux` and `react-redux` libraries
2. Import `createStore`, `Provider` and `connect`
3. Create a reducer
4. Create a store
5. Place the provider component
6. Connect your components

# Installation

Install the redux and react-redux libraries
`npm install redux`
`npm install react-redux`

Here are the most important values to be imported from the libraries:

```javascript
import { connect, Provider } from "react-redux"
import { createStore } from "redux"
```

# Reducer

- You can only have one reducer in your whole project
- It is simply a two parameter function defined by the programmer
- The first argument is the state
- The second argument is the action
- It returns a new state

### Example

```javascript
let reducer = (state, action) => {
  if (action.type === "addTodo") {
    return { todos: state.todos.concat(action.content) }
  }
  return state // Needed because react-redux calls your reducer with an @@init action
}
```

# `createStore`

- This function is supplied by the redux library. It needs to be imported
- Only call this function once in your whole project
- It takes 3 arguments
- First argument: reducer (see above)
- Second argument: initial state
- Third argument (needed for redux devtools): `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`

### Example

```javascript
const store = createStore(
  reducer, // reducer
  {}, // initial state (in this case, empty)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
```

# `Provider`

- Component supplied by the react-redux library. It needs to be imported.
- Only used once in your whole project
- Must be an ancestor of all your connected components
- Takes one attribute called `store`, the value of that attribute is the store
- The easiest place to put it is as the top level component in the index.js file

### Example

```JSX
      ReactDOM.render(<Provider store={store}>
        <App/>
      </Provider>, document.getElementById("root"))

```

# `connect`

- This function is supplied by the react-redux library. It needs to be imported.
- `connect` can take 0, 1 or 2 arguments
- The first argument is a function, typically referred to by a mapStateToProps variable
- mapStateToProps takes 1 parameter. That parameter represents the state
- The return value of mapStateToProps is an object. Each property of that object will become a prop in a component
- `connect` is a function that returns a function.

### Example

```javascript
let mapStateToProps = state => {
  return { actionProp: state.numActions }
}
let ConnectedDisplayTodos = connect(mapStateToProps)(SomeComponent)
```

# `dispatch`

- Any connected component has access to this.props.dispatch
- Dispatch takes one argument
- The argument represents an action
- The reducer is then called with that action and the current state

### Example

```javascript
this.props.dispatch({
  type: "deletItem",
  itemNumber: 5
})
```

# Information flow

In the following diagram I put the flow of information. Each step is labeled. Step 1 happens first, then step 2, etc...
![alt text](./flow.jpg)

1. First dispatch is called on line 19. The argument of the dispatch is an object which describes how the store is to be modified. We call this object the action.
2. Because dispatch is called, the reducer is called and the second argument is the object that was dispatched in step 1. The first argument is the current state of the store. The reducer returns a new state. The redux library sets the state of the store to this new value.
3. The function that starts on line 28 is called. It returns an object. Each property of that object is passed to the unconnected component through props
4. The component is re rendered because its props has changed. The updated value of appSid is available.

# Associations

In the following diagram I label each property name or string that must be equal.
![alt text](./associations.jpg)

1. Each action that is dispatched must have a type property. The reducer will then be able to look at the action type to determine how to handle the action.
2. The programmer has picked a unique string, `"set-messages"` to identify this action. This is because there might be many different actions that are dispatched. In the reducer we can check that the type of an action matches this unique string.
3. The action can also contain other information. We can then use this information to modify the state in the reducer. The property name `actionSid` was picked by the programmer.
4. `sid` is a property name that was picked by the user to label the part of the state that is concerned with session ids.
5. `appSid` was picked by the programmer as the name of the props used to access the `sid` property of the state.

There is a small typo in this image. Can you find it?
