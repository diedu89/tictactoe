export default (state = null, action) => {
  switch (action.type) {
    case 'CHECK_WINNER':
      const { board, turn, size, lastMove } = action;
      const { row, col } = lastMove;
      var noWinnerResult = null;
      var player = board[row][col];
      
      //if it's the last turn should return a draw
      if(turn >= Math.ceil((size * size)/2)){
        if((size % 2 === 1) || (size % 2 === 0 && player === '0'))
          noWinnerResult = {
            player: 'none',
            winType: 'none'
          };
      }

      if(turn < size)
        return state;

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

      if(row === col){
        winner = player;
        //check for down diagonal
        for (i = 0; i < size; i++) {
          if(board[i][i] !== player){
            winner = null;
            break;
          }
        }

        if(winner) return {player: winner, lastMove, winType: 'down_diagonal'};
      }


      if(col !== size - row - 1) return noWinnerResult;

      //check for up diagonal
      winner = player;
      var j = size - 1;
      for (i = 0; i < size; i++, j--) {
        if(board[i][j] !== player){
          return noWinnerResult
        } 
      }

      return {player: winner, lastMove, winType:'up_diagonal'};
    case 'RESET':
      return null;
    default:
      return state
  }
}