import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class Status extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch({type: 'timesUp'})
    }, 1000)
  }
  render() {
    if (this.props.lost) {
      return (<div> You lost </div>)
    }
    if (this.props.won) {
      return (<div> You won </div>)
    }
    return (<div> Click as fast as possible! </div>)
  }
}

let mapStateToProps = function(state) {
  return {
    lost: state.playerLost,
    won: state.playerWon
  }
}

let ConnectedStatus = connect(mapStateToProps)(Status)
export default ConnectedStatus;
