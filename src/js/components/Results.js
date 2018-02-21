import React from 'react'
import PropTypes from 'prop-types'
import {ImageLoader} from 'containers/ImageLoader'


let count = 0;
const Results = ({ filtered, activeFilters }) => {
       return (
        <main role="main" className="result-page container">
          <div className="row" >
          {(filtered.length === 0 && activeFilters > 0)? 
             <div className="alert alert-warning col result-page__alert" role="alert"> There's no options avaiable for selected configuration </div> :
            ""}
          {filtered.map(item => {
            return <div key={count++} className="col-md-4 result-page__item">
                      <div className="result-page__item__box">
                        <div className="result-page__item__box__img">
                          <ImageLoader src={item.img} />
                        </div>
                        <div className="result-page__item__box__description">
                          <div><b>Type</b>: {item.type}</div>
                          <hr/>
                          <div><b>Brand</b>: {item.brand}</div>
                          <hr/>
                          <div><b>Avaiable colors</b>: {item.colors.join(", ")}</div>
                        </div>
                      </div>
                    </div>
          })}
          </div>
        </main>
    )
}

Results.propTypes = {
  filtered: PropTypes.array.isRequired,
  activeFilters: PropTypes.number.isRequired
}

export default Results

