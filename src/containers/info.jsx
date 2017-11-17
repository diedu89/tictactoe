import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Button } from 'react-bootstrap';

import { playAgain, configure } from '../actions/index';

class GameInfo extends Component{

	renderWinner(winner){
		if(winner.player === 'none')
			return (<h2>It's a draw!!</h2>);

		return (<h2>Congrats player {winner.player}, You WON!!! </h2>);
	}

	render(){
		if (this.props.configuring) return null;
		
		const { winner, player, playAgain, configure } = this.props;
		if(!winner)
			return (<h3>Turn of player {player}</h3>);

		return (
	    <div>
	      {this.renderWinner(winner)}
	      <br/>
	      <Button bsStyle="primary" onClick={() => playAgain()}>Play again!</Button>
	      <br /><br />
	      <Button bsStyle="primary" onClick={() => configure()}>Change size of the board</Button>
	    </div>
	  );
	}

}

const mapStateToProps = (state, ownProps) => {
	return {player: state.currentPlayer, winner: state.winner, configuring: state.configuring}
}

const mapDispatchToProps = { playAgain, configure }

export default connect(mapStateToProps, mapDispatchToProps)(GameInfo)