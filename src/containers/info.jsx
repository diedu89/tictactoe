import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { Button } from 'react-bootstrap';

import { playAgain, configure } from '../actions/index';

class GameInfo extends Component{

	renderWinner(winner){
		if(winner.player === 'none')
			return (<h2>It's a draw!!</h2>);

		return (
			<div>
				<h2>Congrats player</h2>
				<div className={this.getClassName(winner.player)}></div>
				<h2>You WON!!!</h2>
			</div>
		);
	}

	getClassName(player){
		console.log(player);
		return "current-player " +
			((player === '0') ? "o-player" : "x-player");
	}

	render(){
		if (this.props.configuring) return null;
		
		const { winner, player, playAgain, configure } = this.props;

		return (
	    <div>
	      {
	      	(winner) ? 
	      		this.renderWinner(winner)
	      	:
  					<div>
							<h3>Turn of player</h3>
							<div className={this.getClassName(player)}></div>
						</div>
	      }
	      <br/>
	      <Button bsStyle="primary" onClick={() => playAgain()}>
	      	{(winner) ? 'Play again!' : 'Restart game'}
	      </Button>
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