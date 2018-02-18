import React from 'react'
import PropTypes from 'prop-types'

const FilterSelect = ({filter, options, onChange, noActiveFilters}) => {
    const myOptions =  options.map(item => <option key={item}> {item} </option>) 
    const value = (noActiveFilters)? {value: 0} : {};
    return (
        <select onChange={onChange.bind(this)} {...value} >
          {(options.length === 0)? <option> Loading... </option> : <option value={0}>  Select an option </option>  }
          {myOptions}
        </select>
    )
}

FilterSelect.propTypes = {
  filter: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FilterSelect