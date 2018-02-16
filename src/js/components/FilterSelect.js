import React from 'react'
import PropTypes from 'prop-types'

const FilterSelect = ({filter}) => {
  return (
    <select>
      <option> teste </option>
    </select>
  )
}

FilterSelect.propTypes = {
  filter: PropTypes.string.isRequired
}

export default FilterSelect