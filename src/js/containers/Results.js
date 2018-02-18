import Result from "components/Results"
import { connect } from 'react-redux'
import filterContent from "helpers/filterContent"


const mapStateToProps = (state) => {
  return {
     filtered : filterContent(state.dataFetched, state.filters)
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