export default (state = 'x', action) => {
  switch (action.type) {
    case 'CELL_CHANGED':
      return (action.player === 'x') ? '0' : 'x';
    case 'RESET':
    	return 'x';
    default:
      return state
  }
}