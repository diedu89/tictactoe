export default (state = null, action) => {
  switch (action.type) {
    case 'CHECK_WINNER':
      const { board, turn, size, lastMove } = action;
      const { row, col } = lastMove;

      if(turn < size)
        return state;

      var player = board[row][col];
      var winner = player;
      var i = 0;

      //check row
      for (i = 0; i < size; i++) {
        if(board[row][i] !== player){
          winner = null;
          break;
        }
      }

      if(winner) return {player: winner, lastMove, winType: 'row'};

      winner = player;
      //check for column
      for (i = 0; i < size; i++) {
        if(board[i][col] !== player){
          winner = null;
          break;
        }
      }

      if(winner) return {player: winner, lastMove, winType: 'col'};

      if(row !== col) return null;

      winner = player;
      //check for down diagonal
      for (i = 0; i < size; i++) {
        if(board[i][i] !== player){
          winner = null;
          break;
        }
      }

      if(winner) return {player: winner, lastMove, winType: 'down_diagonal'};

      if(col !== size - row - 1) return null;

      //check for up diagonal
      winner = player;
      var j = size - 1;
      for (i = 0; i < size; i++, j--) {
        if(board[i][j] !== player){

          //it was the last turn, so the game ended in draw
          if(turn >= Math.ceil((size * size)/2))
            return {
              player: 'none',
              lastMove, winType: 'none'
            };

          return null;
        } 
      }

      return {player: winner, lastMove, winType:'up_diagonal'};

    default:
      return state
  }
}