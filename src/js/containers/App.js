import React, { Component } from "react";
import FilterList from "components/FilterList";
import trafficMeister from "data/index"
class App extends Component {

  constructor() {
    super();
    this.state ={
      tries: 0,
      maxTries: 6,
      timer: 1000 
    }
    this._getData = this._getData.bind(this);
  }

  _getData(){
    trafficMeister.fetchData((err, data) => {
      if(err !== null ){
        this.setState({ tries: this.state.tries+1})
        if(this.state.tries < this.state.maxTries) setTimeout(this._getData, this.state.timer);
        throw (err);
      }
      // redux
      this.props.onFetchData(data);
    })
  }

  componentDidMount(){
   this._getData();
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">TraficMeister</header>
        <div className="app__filters">
          <FilterList />
        </div>
        <div className="app_results">
          results
        </div>
      </div>
    );
  }
}
export default App;