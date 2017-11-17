import React from 'react'
import { Component } from 'react'

import { connect } from 'react-redux'
import { markCell, notifyCellChange } from '../actions/index'

const classesName = {'x': ' x-player', '0': ' o-player'};

class Cell extends Component {

  shouldComponentUpdate(nextProps, nextState){
    const shouldUpdate = 
      nextProps.value !== this.props.value || 
      nextProps.currentPlayer !== this.props.currentPlayer || 
      nextProps.winner !== this.props.winner;
    return shouldUpdate;
  }

  componentWillUpdate(nextProps, nextState){
    console.log(this.props);
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
    var classes = (!this.props.value && !this.props.winner) ? "flipper" : "unflipped";

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
    winner: state.winner
  }
}

const mapDispatchToProps = {
  mark: markCell,
  notify: notifyCellChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)