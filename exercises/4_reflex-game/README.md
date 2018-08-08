# Description
In this exercise set you will integrate redux into a react project. 

# Installation
`npm install`

# Solution
[Solution code](../solutions/4_reflex-game)

# Question 1
This react app currently does not do anything. Integrate react redux. Use the reference sheet if you need help [reference sheet](../reference/README.md). You can also go back to the solution video of the first exercise.

To get a better feel of what your web app should do, visit the final version [here](http://daily-plane.surge.sh)

### HINTS
Put a call to setTimeout in [Status.js](./Status.js)
Place the setTimeout in the componentDidMount
The callback of the setTimeout will dispatch an action

# Question 2
Add a restart button

### HINTS
You will need to dispatch an action that resets the state
You will need another call to setTimeout
