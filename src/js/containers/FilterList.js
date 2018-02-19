import FilterList from "components/FilterList"
import { filterRemove } from 'actions/index'
import { connect } from 'react-redux'

const mapStateToProps = (state =[]) => {
  return {
     filterActive: (Object.keys(state.filters).length > 0)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: e => {
      e.preventDefault();
      dispatch(filterRemove())
    }
  }
}

const FilterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList)

export default FilterListContainer