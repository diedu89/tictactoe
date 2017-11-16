import React from 'react'
import { connect } from 'react-redux'

const Board = props => {
  console.log(props);
  const { board } = props;
  return (
    <div>
    {
      board.map(row =>{
        console.log(row);
        return (
          <div className="flex-container">
            {
              row.map(value => (
                <div className="flex-item">
                  {value ? value : ""}
                </div>)
              )
            }
          </div>);
      })
    }
    </div>
  )
}

export default connect(state => state)(Board)