import { combineReducers } from 'redux';

import board from './board';
import winner from "./winner";
import player from "./player";
import turn from "./turn";
import size from "./size";

export default combineReducers({
	board, winner, turn, size, 
	currentPlayer: player
});