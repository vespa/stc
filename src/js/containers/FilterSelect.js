import FilterSelect from "components/FilterSelect"

import { connect } from 'react-redux'
import { filterVehicle , filterVehicleBrand, filterVehicleColor , filterRemove} from 'actions/index'
import filterContent from "helpers/filterContent"

export const filterByType = (type, data) =>{
  return data
  .map(item =>{
       return item[type];
    }).filter((item, index, self)=>{
      return index === self.indexOf(item);
    });
  }
const normalize = item =>{
  return item.toLowerCase().replace(/\s{}/g, "")
}

export const setContent = (filter, data = []) => {
    switch(filter){
      case "FILTER_VEHICLE":
        return filterByType("type",data);
      case "FILTER_VEHICLE_BRAND":
       return filterByType("brand",data);

      case "FILTER_VEHICLE_COLOR":
          var arr = [];
          filterByType("colors",data).map(item => {
              arr = [...arr, ...item]
          })
          return arr.map(item => {
              return normalize(item);
          })
          .sort()
          .filter((item, index, self)=>{
            return index === self.indexOf(item);
          });
      default:
        return [].concat.apply([], data);
    }
}

export const filterResults = (dispatch, filter, value) => {
  switch(filter){
      case "FILTER_VEHICLE":
        return dispatch(filterVehicle(value));
      case "FILTER_VEHICLE_BRAND":
        return dispatch(filterVehicleBrand(value));
      case "FILTER_VEHICLE_COLOR":
        return dispatch(filterVehicleColor(value));
      default:
        return [];
  }
}


const mapStateToProps = (state, ownProps) => {
    return {
     options: setContent(ownProps.filter, filterContent(state.dataFetched, state.filters)),
     //options: setContent(ownProps.filter, state.dataFetched),
     noActiveFilters: (Object.keys(state.filters).length === 0)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: e => {
      filterResults(dispatch, ownProps.filter, e.target.value)
    },
    onClick: e => {
      e.preventDefault();
      filterResults(dispatch, ownProps.filter, "0")
    }
  }
}

export const FilterSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSelect)
