export default (state = 0, action) => {
  switch (action.type) {
    case 'CELL_CHANGED':
      return (action.player === 'x') ? state + 1 : state;
    default:
      return state
  }
}