export default (state = 0, action) => {
  switch (action.type) {
    case 'CELL_CHANGED':
      return (action.player === 'x') ? state + 1 : state;
    case 'CHANGE_SIZE':
    case 'RESET':
    	return 0;
    default:
      return state
  }
}