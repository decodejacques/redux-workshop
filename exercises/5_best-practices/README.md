# Description

These exercises should be done if you have nothing else to do. They describe how react-redux is used in industry. If you have anything else to do, go do that. Don't feel bad if you can't do these exercises.

# Question 1

`this.props.dispatch` is not used in industry. Instead, you pass a second argument to connect, typically a variable called `mapDispatchToProps`. See [this document](https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/) for more information

Your job: for each of the previous questions, remove `this.props.dispatch` and use `mapDispatchToProps` instead.

# Question 2

Currently, we're creating objects to be used as actions whenever we need them (typically when we call `this.props.dispatch`). The industry standard is to put all your actions in a separate file, as described in [this document](https://redux.js.org/basics/actions). For each of the previous react redux exercises, put all your actions in separate files.