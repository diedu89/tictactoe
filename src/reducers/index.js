import { combineReducers } from 'redux';

import board from './board';
import winner from "./winner";

export default combineReducers({
	board, winner
});