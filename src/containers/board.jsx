import React from 'react'
import { connect } from 'react-redux'

import Cell from './cell';

const Board = props => {
  const { board } = props;
  return (
    <div>
    {
      board.map( (row, rowIndex) =>{
        return (
          <div className="flex-container" key={rowIndex}>
            {
              row.map((value, colIndex) => <Cell key={(rowIndex + 1) * colIndex} row={rowIndex} col={colIndex} />)
            }
          </div>);
      })
    }
    </div>
  )
}

export default connect(state => state)(Board)