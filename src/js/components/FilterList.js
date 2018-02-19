import React from 'react'
import PropTypes from 'prop-types'
import {FilterSelectContainer} from "containers/FilterSelect"

const FilterList = ({ filterActive, onClick }) => {
  return (
    <div className="app__filters__list">
      {(filterActive)? <div> <a href="#" onClick={onClick.bind(this)} > Remove all filters </a> </div> : ""}
      <FilterSelectContainer filter="FILTER_VEHICLE" />
      <FilterSelectContainer filter="FILTER_VEHICLE_BRAND" />
      <FilterSelectContainer filter="FILTER_VEHICLE_COLOR" />
    </div>
  )
}
export default FilterList