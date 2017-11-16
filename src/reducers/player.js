export default (state = 'x', action) => {
  switch (action.type) {
    case 'MARK':

      return (action.player === 'x') ? '0' : 'x';
    default:
      return state
  }
}