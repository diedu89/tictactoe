import { combineReducers } from 'redux';

import board from './board';
import winner from "./winner";
import player from "./player";
import turn from "./turn";

const defaultReducer = (defaultValue) => (state = defaultValue) => state

export default combineReducers({
	board, winner, 
	currentPlayer: player, turn,
	size: defaultReducer(3)
});