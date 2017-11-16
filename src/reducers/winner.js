export default (state, action) => {
  switch (action.type) {
    case 'CHECK_WINNER':
      const { board, turn, size, lastMove } = action;
      const { row, col } = lastMove;
      if(action.turn < action.size)
        return state;

      var player = board[row][col];
      var winner = player;

      //check row
      for (var i = 0; i < size; i++) {
        if(board[row][i] != player){
          winner = null;
          break;
        }
      }

      if(winner) return winner;

      winner = player;
      //check for column
      for (var i = 0; i < size; i++) {
        if(board[i][col] != player){
          winner = null;
          break;
        }
      }

      if(winner) return winner;

      if(row != col) return null;

      winner = player;
      //check for down diagonal
      for (var i = 0; i < size; i++) {
        if(board[i][i] != player){
          winner = null;
          break;
        }
      }

      if(winner) return winner;

      if(col != size - row - 1) return null;

      //check for up diagonal
      winner = player;
      for (var i = 0, j= size - 1; i < size; i++, j--) {
        if(board[i][j] != player) return null;
      }

      return winner;
    default:
      return state
  }
}