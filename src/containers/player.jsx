import React from 'react'
import { connect } from 'react-redux'

const Player = props => {
	const { winner, player } = props;
	var message = (<h3>Turn of player {player}</h3>);
	if(winner){
		if(winner.player === 'none')
			message = (<h2>It's a draw!!</h2>);
		else
			message = (<h2>Congrats player {winner.player}, You WON!!! </h2>);
	}

  return (
    <div>
      {message}
    </div>
  )
}

export default connect(state => {
  return {player: state.currentPlayer, winner: state.winner}
})(Player)