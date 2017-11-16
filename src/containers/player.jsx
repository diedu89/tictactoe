import React from 'react'
import { connect } from 'react-redux'

const Player = props => {
  console.log(props);
  return (
    <div>
      <h3>Turn of player {props.player}</h3>
    </div>
  )
}

export default connect(state => {
  return {player: state.currentPlayer}
})(Player)