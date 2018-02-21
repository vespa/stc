import React from 'react'
import PropTypes from 'prop-types'
import {FilterSelectContainer} from "containers/FilterSelect"
let cont = 0;
const FilterList = ({ activeList , filterActive, onClick }) => {
  return (
    <div>
      <div  className="navbar navbar-dark bg-dark box-shadow">
      	<div className="container filter-lit"> 
  	      <FilterSelectContainer filter="FILTER_VEHICLE" />
  	      <FilterSelectContainer filter="FILTER_VEHICLE_BRAND" />
  	      <FilterSelectContainer filter="FILTER_VEHICLE_COLOR" />
	      </div>
      </div>
      <div className="container">
	      {(filterActive)? <div className="row filter-list__filters"> <a role="button" className="btn btn-info btn-sm" href="#" onClick={onClick.bind(this)} > Remove all filters </a> </div> : ""}
	      {(activeList && activeList.length > 0)? <div className="row filter-list__filters"><b>Active options:</b>  &nbsp; <i>{activeList.map(item => {
	      		return <span key={cont++}>{" "}<span  className="badge badge-pill badge-default badge-info">{item.filter}</span></span>
	      })}</i></div> :""}
      </div>
    </div>
  )
}

FilterList.propTypes = {
  activeList: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  filterActive: PropTypes.bool.isRequired
}
export default FilterList