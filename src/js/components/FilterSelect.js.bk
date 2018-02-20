import React from 'react'
import PropTypes from 'prop-types'

const FilterSelect = ({filter, options, onChange, noActiveFilters, onClick}) => {
    const myOptions =  options.map(item => <option key={item}> {item} </option>) 
    const value = (noActiveFilters)? {value: 0} : {};
    return (
        <div>
          {(options.length === 1 && !noActiveFilters)? <div> active filter: <b>{options}</b> </div>:
            <select onChange={onChange.bind(this)} {...value} >
              {(options.length === 0)? <option> Loading... </option> : <option value={0}>  Select an option </option>  }
              {myOptions}
            </select>
           }
        </div>
    )
}

FilterSelect.propTypes = {
  filter: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  noActiveFilters: PropTypes.bool.isRequired
}

export default FilterSelect