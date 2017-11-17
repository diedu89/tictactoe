export default (state = true, action) => {
  switch (action.type) {
    case 'CONFIGURE':
    	return true;
    case 'CHANGE_SIZE':
      return false;
    default:
      return state;
  }
}