import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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

const store = createStore(rootReducer, defaultState, compose(applyMiddleware(...middleware), ...enhancers));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));

registerServiceWorker();