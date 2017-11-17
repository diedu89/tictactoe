import React from 'react'
import { Component } from 'react'

import { connect } from 'react-redux'
import { markCell, notifyCellChange } from '../actions/index'

class Cell extends Component {

  shouldComponentUpdate(nextProps, nextState){
    const shouldUpdate = nextProps.value !== this.props.value;
    return shouldUpdate;
  }

  mark(){
    const { value, mark, row, col, winner, currentPlayer } = this.props;
    if(!value && !winner) 
      mark(row, col, currentPlayer);
  }

  render(){
    return (
        <div className="flex-item" onClick={this.mark.bind(this)}>
          {this.props.value ? this.props.value : " "}
        </div>
      );
  }

  componentDidUpdate(prevProps, prevState){
    const { value, notify, row, col } = this.props;
    notify(row, col, value);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPlayer: state.currentPlayer,
    value: state.board[ownProps.row][ownProps.col],
    winner: state.winner
  }
}

const mapDispatchToProps = {
  mark: markCell,
  notify: notifyCellChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)