import FilterSelect from "components/FilterSelect"
import { filterVehicle , filterVehicleBrand, filterVehicleColor , filterRemove} from 'actions'
import { connect } from 'react-redux'
import filterContent from "helpers/filterContent"

const filterByType = (type, data) =>{
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

const setContent = (filter, data = []) => {
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
    return data
}

const filterResults = (dispatch, filter, value) => {
  switch(filter){
      case "FILTER_VEHICLE":
        dispatch(filterVehicle(value));
        break;
      case "FILTER_VEHICLE_BRAND":
        dispatch(filterVehicleBrand(value));
       break;
      case "FILTER_VEHICLE_COLOR":
        dispatch(filterVehicleColor(value));
        break;
      default:
        return [];
  }
}


const mapStateToProps = (state, ownProps) => {
    return {
     options: setContent(ownProps.filter, filterContent(state.dataFetched, state.filters)),
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

const FilterSelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterSelect)

export default FilterSelectContainer