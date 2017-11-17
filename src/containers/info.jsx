import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Button } from 'react-bootstrap';

class GameInfo extends Component{

	renderWinner(winner){
		if(winner.player === 'none')
			return (<h2>It's a draw!!</h2>);

		return (<h2>Congrats player {winner.player}, You WON!!! </h2>);
	}

	render(){
		const { winner, player } = this.props;
		if(!winner)
			return (<h3>Turn of player {player}</h3>);

		return (
	    <div>
	      {this.renderWinner(winner)}
	      <br/>
	      <Button bsStyle="primary">Play again!</Button>
	    </div>
	  );
	}

}

export default connect(state => {
  return {player: state.currentPlayer, winner: state.winner}
})(GameInfo)