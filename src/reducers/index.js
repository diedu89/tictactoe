import { combineReducers } from 'redux';

import board from './board';
import winner from "./winner";
import player from "./player";

const defaultReducer = (defaultValue) => (state = defaultValue) => state

export default combineReducers({
	board, winner, 
	currentPlayer: player, 
	size: defaultReducer(3), 
	turn: defaultReducer('x') 
});