const fetchData = (state = "", action) => {
  switch (action.type) {
    case 'DATA_FETCHED':
      return action.data
    default:
      return state
  }
}
export default fetchData