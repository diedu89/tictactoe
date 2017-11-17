import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Button } from 'react-bootstrap';

import { playAgain } from '../actions/index';

class GameInfo extends Component{

	renderWinner(winner){
		if(winner.player === 'none')
			return (<h2>It's a draw!!</h2>);

		return (<h2>Congrats player {winner.player}, You WON!!! </h2>);
	}

	render(){
		const { winner, player, playAgain } = this.props;
		if(!winner)
			return (<h3>Turn of player {player}</h3>);

		return (
	    <div>
	      {this.renderWinner(winner)}
	      <br/>
	      <Button bsStyle="primary" onClick={() => playAgain()}>Play again!</Button>
	    </div>
	  );
	}

}

const mapStateToProps = (state, ownProps) => {
	return {player: state.currentPlayer, winner: state.winner}
}

const mapDispatchToProps = { playAgain }

export default connect(mapStateToProps, mapDispatchToProps)(GameInfo)