import Result from "components/Results"
import { dataFetched } from 'actions'
import { connect } from 'react-redux'

const mapStateToProps = (state =[]) => {
  return {
     filtered : state.dataFetched.slice(0)
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)

export default ResultContainer;