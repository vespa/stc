import React, { Component } from "react";
import FilterList from "containers/FilterList";
import Results from "containers/Results";
import trafficMeister from "data/index"
class App extends Component {

  constructor() {
    super();
    this.state ={
      tries: 0,
      maxTries: 6,
      timer: 500
    }
    this._getData = this._getData.bind(this);
    this._tryCallData = this._tryCallData.bind(this)
  }

  _fetchData(data){
    this.props.onFetchData(data);
  }

  _tryCallData(err, data){
    if(err !== null){
      if(this.state.tries < this.state.maxTries) {
        setTimeout(this._getData, this.state.timer)
      }else{
        throw "too much tries";
      }
      throw err;
    }
    this._fetchData(data);
  }
  
  _getData(){
    const that = this;
    trafficMeister.fetchData((err, data) => {
      that._tryCallData(err, data)
    })
  }

  componentDidMount(){
   this._getData();
  }

  render() {
    return (
      <div >
        <header className="app__header ">
            <div className="container text-center">
              <div className="app__header__logo">
                  <img src="./img/logo.png" />
              </div>
            </div> 
        </header>
        <FilterList />
         <div className="app_results">
          <Results />
        </div>
      </div>
    );
  }
}
export default App;