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
    this._fetchData = this._fetchData.bind(this)
  }

  _fetchData(data){
    this.props.onFetchData(data);
  }

  _tryCallData(err){
    if(this.state.tries < this.state.maxTries) {
      this.setState({tries:this.state.tries+1})
      setTimeout(this._getData, this.state.timer);
      throw err;
    }
    throw "too much tries";
  }

  _returnData(resolve, reject, err, data){
      if(err !== null) return reject(err);
      return resolve(data)
  }

  _getData(){
    return new Promise((resolve, reject) => {
      trafficMeister.fetchData((err, data) => {
        this._returnData(resolve, reject, err, data);
      })
    }).then(data => this._fetchData(data))
      .catch(err => this._tryCallData(err))
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