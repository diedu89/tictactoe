export default (state = 3, action) => {
  switch (action.type) {
    case 'RESET':
    	return state;
    case 'CHANGE_SIZE':
      return action.size;
    default:
      return state;
  }
}