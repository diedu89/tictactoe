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
    default:
      return state
  }
}