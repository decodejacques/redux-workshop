# Description
In this exercise set you will integrate redux into a react project.

# Installation and usage
`npm install`

`npm start`

# Question 1
This react app currently does not do anything. You need to integrate react redux. To do this, first follow along this [video](https://youtu.be/NTSIFinXOs8). Then see if you can do it yourself with the [reference sheet](/reference/README.md)

To get a better feel of what your web app should do, visit the final version [here](http://spiritual-dolls.surge.sh)

### Solution

An example solution is provided [here](/solutions/2_todo-list)

# Question 2
Add a button to reverse the list

### Hint
Here is how you reverse an array without mutation. You'll have to do this in the reducer.

`let newArray = originalArray.slice().reverse()`

### Hint 2
Your reducer will need to be able to process another action
You will also be dispatching another action

