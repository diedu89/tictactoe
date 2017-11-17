import React from 'react'
import { Component } from 'react'

import { connect } from 'react-redux'
import { markCell, notifyCellChange } from '../actions/index'

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

  getBackClassName(){
    var classes = "back";
    if(!this.props.value){
      console.log(this.props)
      if(this.props.currentPlayer === '0')
        classes += " o-player";
      else
        classes += " x-player";
    }
    return classes;  
  }

  getFrontClassName(){
    var classes = "front";
    if(this.props.value){
      if(this.props.value === '0')
        classes += " o-player";
      else
        classes += " x-player";
    }
    return classes; 
  }

  flip(){
    this.classNameList.toggle('hover');
  }

  flippable(){
    return (!this.props.value && !this.props.winner) ? "flipper" : "";
  }

  render(){
    return (
        <div className="flex-item" onClick={this.mark.bind(this)}>
          {/*<img style={{width:'100%'}} src="https://appstickers-cdn.appadvice.com/1166350852/819346269/ced8fa5efbf548fccb7b5056e87b973f-2.png" />*/}
          {/*this.props.value ? this.props.value : " "*/}
          <div className="flip-container" onTouchStart={this.flip}>
            <div className={this.flippable()}>
              <div className={this.getFrontClassName()}>
                
              </div>
              <div className={this.getBackClassName()}>
                
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