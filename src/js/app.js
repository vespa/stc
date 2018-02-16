import React, { Component } from "react";
import ReactDOM from "react-dom";
import CSS from '../css/main.scss'
import FilterSelect from "components/FilterSelect";
import 'babel-polyfill'

const wrapper = document.getElementById("root");

const app = ()=>{
    const itemClass = "app__item";
    return  <div className="app">
                <header className="app__header">TraficMeister</header>
                <div className="app__filters">
                    <div className="app__filters__list">
                        <FilterSelect filter="FILTER_VEHICLE" />
                        <FilterSelect filter="FILTER_VEHICLE_BRAND" />
                        <FilterSelect filter="FILTER_VEHICLE_COLOR" />
                    </div>
                </div>
                <div className="app_results">
                    results
                </div>
            </div>
}
wrapper ? ReactDOM.render(app(), wrapper) : false;
