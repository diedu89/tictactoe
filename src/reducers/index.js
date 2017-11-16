import { combineReducers } from 'redux';

import board from './board';
import winner from "./winner";
import player from "./player";

export default combineReducers({
	board, winner, currentPlayer: player
});