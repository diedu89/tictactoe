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
    case 'CHANGE_SIZE':
      return createBoard(action.size);
    default:
      return state
  }
}

const createBoard = function(size){
  var board = [];
  for (var i = 0; i < size; i++) {
    var row = [];
    for (var j = 0; j < size; j++) 
      row.push(null);
    
    board.push(row)
  };
  return board;
}