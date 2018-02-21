import React from "react";
import {FilterSelectContainer, filterResults, setContent, filterByType} from "containers/FilterSelect";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers/index'
import {configure, shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { connect } from 'react-redux'

let wrapper,  store = createStore(reducers);

describe("FilterSelect", ()=>{

  it('should render correctly', () => {
   const component = renderer.create(
      <Provider store={store}>
          <FilterSelectContainer 
              filter="FILTER_VEHICLE"
              />
      </Provider>
    );
    let tree1 = component.toJSON();
    expect(tree1).toMatchSnapshot();
  });

  beforeEach(() =>{
    store = createStore(reducers);
    store.dispatch = jest.fn();
    wrapper = shallow(<FilterSelectContainer filter="FILTER_VEHICLE" store={store}/>);
  });

  it('maps state and dispatch to props', () => {
    expect(wrapper.props()).toEqual(expect.objectContaining({
      onClick: expect.any(Function),
      options: expect.any(Array)
    }));
  });

  it('maps change', () => {
    let eventType = {
        preventDefault : () =>{},
        target:{
          value: "car"
        }
    }
    wrapper.props().onChange(eventType)
    expect(store.dispatch).toHaveBeenCalledWith({"field":"type", "filter":"car","type": "FILTER_VEHICLE"});
  });

  test("filterResults", ()=>{
    var returnVal = function(data){
      return (data)
    }
    expect(filterResults(returnVal, "FILTER_VEHICLE", "car")).toEqual({"field":"type", "filter":"car","type": "FILTER_VEHICLE"});
    expect(filterResults(returnVal, "FILTER_VEHICLE_BRAND", "car")).toEqual({"field":"brand", "filter":"car","type": "FILTER_VEHICLE_BRAND"});
    expect(filterResults(returnVal, "FILTER_VEHICLE_COLOR", "car")).toEqual({"field":"colors", "filter":"car","type": "FILTER_VEHICLE_COLOR"});
    expect(Array.isArray(filterResults(returnVal, "dfsfsf", "car"))).toBe(true);
  })
  test("setContent" , ()=> {
    let arr = [
        {
          id: 1,
          type: 'car',
          brand: 'Bugatti Veyron',
          colors: ['red', 'black'],
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg'
        },
        {
          id: 2,
          type: 'airplane',
          brand: 'Boeing 787 Dreamliner',
          colors: ['red', 'white', 'black', 'green'],
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg/600px-All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg'
        },
        {
          id: 4,
          type: 'airplane',
          brand: 'Canadair North Star',
          colors: ['red', 'blue', 'yellow', 'green'],
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/BOAC_C-4_Argonaut_Heathrow_1954.jpg/600px-BOAC_C-4_Argonaut_Heathrow_1954.jpg'
        },
    ]
    expect(setContent("FILTER_VEHICLE",arr)).toEqual(['car','airplane']);
    expect(setContent("FILTER_VEHICLE_BRAND", arr)).toEqual(['Bugatti Veyron', 'Boeing 787 Dreamliner', 'Canadair North Star']);
    expect(setContent("FILTER_VEHICLE_COLOR", arr)).toEqual(["black", "blue", "green", "red", "white", "yellow"]);
    expect(setContent("fasddsf")).toEqual([]);
  });

  test("click function", ()=>{
    let eventType = {
        preventDefault : () =>{},
        target:{
          value: "car"
        }
    }
    wrapper.props().onClick(eventType)
    expect(store.dispatch).toHaveBeenCalledWith({"field":"type", "filter":"0","type": "FILTER_VEHICLE"});
  })
})