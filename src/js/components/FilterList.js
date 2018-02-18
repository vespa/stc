import React from 'react'
import PropTypes from 'prop-types'
import FilterSelect from "containers/FilterSelect"

const FilterList = ({ filterActive, onClick }) => {
  return (
    <div className="app__filters__list">
      {(filterActive)? <div> <a href="#" onClick={onClick.bind(this)} > remove filters </a> </div> : ""}
      <FilterSelect filter="FILTER_VEHICLE" />
      <FilterSelect filter="FILTER_VEHICLE_BRAND" />
      <FilterSelect filter="FILTER_VEHICLE_COLOR" />
    </div>
  )
}


export default FilterList