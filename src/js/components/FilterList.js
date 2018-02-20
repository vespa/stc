import React from 'react'
import PropTypes from 'prop-types'
import {FilterSelectContainer} from "containers/FilterSelect"

const FilterList = ({ activeList , filterActive, onClick }) => {
  return (
    <div className="app__filters__list">
      {(filterActive)? <div> <a href="#" onClick={onClick.bind(this)} > Remove all filters </a> </div> : ""}
      {(activeList && activeList.length > 0)? <span> active options: <i>{activeList.map(item => item.filter).join(", ")}</i></span> :""}
      <FilterSelectContainer filter="FILTER_VEHICLE" />
      <FilterSelectContainer filter="FILTER_VEHICLE_BRAND" />
      <FilterSelectContainer filter="FILTER_VEHICLE_COLOR" />
    </div>
  )
}
export default FilterList