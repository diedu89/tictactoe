import React from 'react'
import { Component } from 'react'

import { connect } from 'react-redux'
import { markCell, notifyCellChange } from '../actions/index'

class Cell extends Component {
  constructor(props){
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState){
    const shouldUpdate = nextProps.value !== this.props.value;
    return shouldUpdate;
  }

  render(){
    const { value, mark, row, col } = this.props;
    console.log("It changed " + row + " " + col + " " + value);
    return (
        <div className="flex-item" onClick={() => { if(!this.props.value) mark(row, col, this.props.currentPlayer); } }>
          {value ? value : " "}
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
    value: state.board[ownProps.row][ownProps.col]
  }
}

const mapDispatchToProps = {
  mark: markCell,
  notify: notifyCellChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)