import React from 'react'
import PropTypes from 'prop-types'

let count = 0;
const Results = ({ filtered}) => {
       return (
        <div >
        
          {filtered.map(item => {
            return <div key={count++}>
                      <div><b>Type</b>: {item.type}</div>
                      <div><b>Brand</b>: {item.brand}</div>
                      <div><b>Avaiable colors</b>: {item.colors.join(", ")}</div>
                      <hr />
                    </div>
          })}
        </div>
    )
}

Results.propTypes = {
  filtered: PropTypes.array.isRequired,
}

export default Results