import React from 'react'
import { Component } from 'react'

import { connect } from 'react-redux'
import { markCell, notifyCellChange } from '../actions/index'

const classesName = {'x': ' x-player', '0': ' o-player'};

class Cell extends Component {
  constructor(props){
    super(props);
    this.isWinner = false;
  }

  shouldComponentUpdate(nextProps, nextState){
    var shouldUpdate = nextProps.value !== this.props.value;
    shouldUpdate = shouldUpdate || nextProps.currentPlayer !== this.props.currentPlayer;

    if (shouldUpdate && nextProps.winner && nextProps.winner.player === this.props.value){
      this.isWinner = this.isInWinningRow(nextProps.winner);
      shouldUpdate = this.isWinner;
    }

    return shouldUpdate;
  }

  isInWinningRow(winner){
    const { row, col, size } = this.props;
    switch(winner.winType){
      case 'row':
        return row === winner.lastMove.row;
      case 'col':
        return col === winner.lastMove.col;
      case 'down_diagonal':
        return row === col;
      case 'up_diagonal':
        return col === size - row - 1;
      default:
        return false;
    }

  }

  mark(){
    const { value, mark, row, col, winner, currentPlayer } = this.props;
    if(!value && !winner) 
      mark(row, col, currentPlayer);
  }

  flip(){
    this.classNameList.toggle('hover');
  }

  flippable(){
    const { value, winner, currentPlayer } = this.props
    var classes = (!value && !winner) ? "flipper" : "unflipped";

    classes += (winner && winner.player === value && this.isWinner) ? " winner" : "";

    if(value)
      return classes + classesName[value] + " flipped"; 
    
    if(!winner)
      return classes + classesName[currentPlayer];

    return classes;
  }

  render(){
    return (
        <div className="flex-item" onClick={this.mark.bind(this)}>
          {/*<img style={{width:'100%'}} src="https://appstickers-cdn.appadvice.com/1166350852/819346269/ced8fa5efbf548fccb7b5056e87b973f-2.png" />*/}
          {/*this.props.value ? this.props.value : " "*/}
          <div className="flip-container" onTouchStart={this.flip}>
            <div className={this.flippable()}>
              <div className="front">
                
              </div>
              <div className="back">
                
              </div>
            </div>
          </div>
        </div>
      );
  }

  componentDidUpdate(prevProps, prevState){
    const { value, notify, row, col } = this.props;
    if(!prevProps.value && value)
      notify(row, col, value);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPlayer: state.currentPlayer,
    value: state.board[ownProps.row][ownProps.col],
    winner: state.winner,
    size: state.size
  }
}

const mapDispatchToProps = {
  mark: markCell,
  notify: notifyCellChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)