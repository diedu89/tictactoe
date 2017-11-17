export default (state = 0, action) => {
  switch (action.type) {
    case 'CELL_CHANGED':
      return (action.player === 'x') ? state + 1 : state;
    case 'RESET':
    	return 0;
    default:
      return state
  }
}