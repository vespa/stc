import App from "./App"
import { dataFetched } from 'actions/index'
import { connect } from 'react-redux'

export const mapStateToProps = (state =[]) => {
  return {
     data : state
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    onFetchData: data => {
      dispatch(dataFetched(data))
    }
  }
}

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
