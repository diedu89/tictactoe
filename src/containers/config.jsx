import React from 'react'
import { Component } from 'react'

import Slider from 'rc-slider';
import { Button } from 'react-bootstrap'

import 'rc-slider/assets/index.css';

import { connect } from 'react-redux'
import { changeSize } from '../actions/index'

class BoardConfig extends Component {

  constructor(props){
    super(props);
    this.state = {size: props.size};
  }

  onChange(value){
    this.setState({size: value});
  }

  render(){
    const { size } = this.state
    return (
      <div className="config-box">
        <h2>Select the size of the board</h2>
        <br />
        <h3>Board: {size} x {size} </h3>
        <br />
        <Slider min={3} max={10} defaultValue={this.props.size} onChange={this.onChange.bind(this)}/>
        <br />
        <Button bsStyle="primary" bsSize="large" onClick={() => this.props.change(size)}>Start!</Button>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    size: state.size
  }
}

const mapDispatchToProps = {
  change: changeSize
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardConfig);