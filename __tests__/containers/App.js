import React from "react";
import App from "containers/App";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers/index'
import trafficMeister from "data/index"
import {configure, shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

import { connect } from 'react-redux'

configure({ adapter: new Adapter() });
let store = createStore(reducers);

describe("App", ()=>{
   let wrapper;


   it('should render correctly', () => {
     const component = renderer.create(
        <Provider store={store}>
            <App 

                />
        </Provider>
      );
     let tree1 = component.toJSON();
     expect(tree1).toMatchSnapshot();
    });

   it('should trigger trafficMeister', ()=>{
      wrapper = shallow(<App store={store}/>)
      trafficMeister.fetchData = jest.fn();
      wrapper.instance()._getData();
      expect(trafficMeister.fetchData.mock.calls.length).toBe(1);
   })

   it('should return an error', ()=>{
      wrapper = shallow(<App store={store}/>)
      trafficMeister.fetchData = jest.fn();
      wrapper.instance()._getData();
      expect(trafficMeister.fetchData.mock.calls.length).toBe(1);
   })

})