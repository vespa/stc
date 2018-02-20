const filterList = (state = [], action) => {

  const createFilter = () => {
    if(action.filter === "0"){
      return state.filter(item => {
        return item.field !== action.field;
      })
    }
    return [...state.filter(item => { return item.field !== action.field; }), {
      filter: action.filter,
      field: action.field
    }]
  }
  switch (action.type) {
    case 'FILTER_VEHICLE':
      return createFilter();
    case 'FILTER_VEHICLE_COLOR':
      return createFilter();
    case 'FILTER_VEHICLE_BRAND':
       return createFilter();
    case 'FILTER_REMOVE':
       return [];
    default:
      return state
  }
}
export default filterList