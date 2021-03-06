export const markCell = (row, col, player) => ({
  type: 'MARK',
  row, col, player
})

export const notifyCellChange = (row, col, player) => {
  return (dispatch, getState) => {
    var state = getState();
    
    dispatch({
      type : "CELL_CHANGED",
      row, col, player
    });

    state = getState();

    dispatch({
			type: "CHECK_WINNER",
			player: state.currentPlayer,
			lastMove: {row, col},
			board: state.board,
			size: state.size,
      turn: state.turn
    });
  }
}

export const playAgain = () => {
  return (dispatch, getState) => {
    var state = getState();
    
    dispatch({
      type : "RESET",
      size: state.size
    });
  }
}

export const changeSize = (size) => ({type: "CHANGE_SIZE", size});

export const configure = () => ({type: "CONFIGURE"});