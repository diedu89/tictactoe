import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Tic Tac Toe</h1>
          <Grid>
            <Grid>
              <Row>
                <Col lgOffset={1} lg={7} style={{backgroundColor: 'tomato'}} >
                  This is the space for the gameboard
                </Col>
                <Col lg={3} style={{backgroundColor: 'blue'}}>
                  This is for other information
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