const defaultState = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'MARK':
      return state.map((item, index) => {
      	if(index !== action.row)
      		return item;

      	return item.map((item, index) => (index === action.col && item === null) ? action.player : item); 
      });
    case 'RESET':
      var board = [];
      for (var i = 0; i < action.size; i++) {
        var row = [];
        for (var j = 0; j < action.size; j++) 
          row.push(null);
        
        board.push(row)
      };

      return board;
    default:
      return state
  }
}