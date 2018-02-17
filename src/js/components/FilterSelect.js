import React from 'react'
import PropTypes from 'prop-types'

const FilterSelect = ({filter, options, onChange}) => {
    const myOptions =  options.map(item => <option key={item}> {item} </option>) 
    return (
        <select onChange={onChange.bind(this)} >
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