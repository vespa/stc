import React from 'react'
import PropTypes from 'prop-types'
import FilterSelect from "components/FilterSelect"

const FilterList = ({filter}) => {
  return (
    <div className="app__filters__list">
      <FilterSelect filter="FILTER_VEHICLE" />
      <FilterSelect filter="FILTER_VEHICLE_BRAND" />
      <FilterSelect filter="FILTER_VEHICLE_COLOR" />
    </div>
  )
}


export default FilterList