const fetchData = (state = [], action) => {
  action.data = action.data || [];
  switch (action.type) {
    case 'DATA_FETCHED':
      return action.data
    default:
      return state;
  }
}
export default fetchData