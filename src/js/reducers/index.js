import { combineReducers } from 'redux'
import dataFetched from './dataFetched'

import filters from './filters'
import filterList from './filterList'



const reducers = combineReducers({
  dataFetched,
  filters,
  filterList
})

export default reducers