import React from 'react'
import PropTypes from 'prop-types'

const FilterSelect = ({options, onChange, noActiveFilters, onClick}) => {
    const myOptions =  options.map(item => <option key={item}> {item} </option>) 
    const value = (noActiveFilters)? {value: 0} : {};
    return (
        <div className="col-sm-4 text-center">
            <select onChange={onChange.bind(this)} {...value} className="custom-select">
              {(options.length === 0)? <option> Loading... </option> : <option value={0}>  Select an option </option>  }
              {myOptions}
            </select>
        </div>
    )
}

FilterSelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  noActiveFilters: PropTypes.bool.isRequired
}

export default FilterSelect