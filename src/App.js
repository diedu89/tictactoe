import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './App.css';

import Board from './containers/board';
import Player from './containers/player';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tic Tac Toe</h1>
          <Grid>
            <Grid>
              <Row>
                <Col lgOffset={2} lg={6} >
                  <Board />
                </Col>
                <Col lg={2}>
                  <Player />
                  
                </Col>
              </Row>
            </Grid>
          </Grid>
        </header>
      </div>
    );
  }
}

export default App;