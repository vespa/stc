const filters = (state =[], action) => {
  switch (action.type) {
    case 'FILTER_VEHICLE':
      return action.data
    default:
      return state
  }
}
export default filters