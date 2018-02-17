import { combineReducers } from 'redux'
import dataFetched from './dataFetched'
import filters from './filters'

const reducers = combineReducers({
  dataFetched,
  filters
})

export default reducers