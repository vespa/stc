
const filters = (state = [], action) => {
  const createFilter = () => {
    if(action.filter === "0"){
      let nState =  Object.assign([], state);
      delete nState[action.type];
      return nState;
    }
    return Object.assign([], state, {[action.type]: {
      filter: action.filter,
      field: action.field
    }});
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
export default filters