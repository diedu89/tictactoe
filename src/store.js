import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import rootReducer from './reducers/index';

const defaultState = {
	board: [
		[null,null,null],
		[null,null,null],
		[null,null,null]
	],
	size: 3,
	turn: 0,
	winner: null,
	currentPlayer: 'x'
};

const middleware = [
  thunk
]

const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

export default createStore(rootReducer, defaultState, compose(applyMiddleware(...middleware), ...enhancers));