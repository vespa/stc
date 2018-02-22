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


describe("App", ()=>{
    let wrapper, 
        store = createStore(reducers);

    beforeEach(() =>{
        store = createStore(reducers);
        store.dispatch = jest.fn();
        wrapper = shallow(<App store={store}  />,  { lifecycleExperimental: true });
    });

   test('should render correctly', () => {
     const component = renderer.create(
        <Provider store={store}>
            <App 

                />
        </Provider>
      );
     let tree1 = component.toJSON();
     expect(tree1).toMatchSnapshot();
    });

   test('should trigger trafficMeister', ()=>{
      trafficMeister.fetchData = jest.fn();
      wrapper.instance()._getData();
      expect(trafficMeister.fetchData.mock.calls.length).toBe(1);
   })

   test('should return an error', ()=>{
      trafficMeister.fetchData = jest.fn();
      wrapper.instance()._getData();
      expect(trafficMeister.fetchData.mock.calls.length).toBe(1);
   })


  test("should call fetchData Props" , () => {
      wrapper.setProps({
          onFetchData: jest.fn(),
      })
      wrapper.instance()._fetchData([]);
      expect(wrapper.instance().props.onFetchData.mock.calls.length).toBe(1);
  });

  test("returnData resolve", done => {
      var nWrapper = wrapper;
      ((nWrapper, done)=>{
        return new Promise((resolve, reject)=>{
          nWrapper.instance()._returnData(resolve, reject, null, ["blue"]);
        }).then(data =>{
           expect(data).toEqual(["blue"]);
          done();
        })
      })(nWrapper, done);
  })

  test("returnData reject", done => {
      var nWrapper = wrapper;
      ((nWrapper, done)=>{
        return new Promise((resolve, reject)=>{
          nWrapper.instance()._returnData(resolve, reject, "reject", ["blue"]);
        }).catch(err =>{
           expect(err).toEqual("reject");
          done();
        })
      })(nWrapper, done);
  })

  test("_getData resolve", done =>{
    trafficMeister.fetchData = jest.fn().mockImplementationOnce(cb =>{
      cb(null, [])
      return ['data'];
    });
    let nWrapper = wrapper.instance();
    nWrapper._fetchData = jest.fn();
    nWrapper._getData().then(data => {
      expect(trafficMeister.fetchData.mock.calls.length).toBe(1);
      done();
    })
  });

  test("_getData reject", done =>{
    trafficMeister.fetchData = jest.fn().mockImplementationOnce(cb =>{
      cb("reject", [])
    });
    let nWrapper = wrapper.instance();
    nWrapper._fetchData = jest.fn();
    nWrapper._getData().catch(err => {
      expect(trafficMeister.fetchData.mock.calls.length).toBe(1);
      expect(err).toBe("reject")
      done();
    })
  });
  
  test("should retry call data" , () => {
    wrapper.instance()._getData = jest.fn();
    wrapper.instance()._fetchData = jest.fn();
    wrapper.setState({
        tries: 5,
        maxTries: 6,
        timer: 100
    })
    let returnError = () => {
      wrapper.instance()._tryCallData("not_null")
    }
    expect(returnError).toThrowError("not_null")

    wrapper.setState({
        tries: 6,
        maxTries: 6,
        timer: 100
    })
    expect(returnError).toThrowError("too much tries")
  })
})