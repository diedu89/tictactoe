export default (state, action) => {
	const { type, payload } = action;

  switch (type) {
    case 'MARK':
      return state.map((item, index) => {
      	if(index != action.row)
      		return item;

      	return item.map((item, index) => (index == action.col && item == null) ? action.player : item); 
      });
    default:
      return state
  }
}