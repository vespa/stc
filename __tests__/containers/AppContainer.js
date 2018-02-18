import React from "react";
import {AppContainer, mapDispatchToProps, mapStateToProps} from "containers/AppContainer";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers/index'
import {configure, shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

let store = createStore(reducers);

describe("AppContainer", ()=>{
    it('should render correctly', () => {
     const component = renderer.create(
        <Provider store={store}>
            <AppContainer />
        </Provider>
      );
     let tree1 = component.toJSON();
     expect(tree1).toMatchSnapshot();
    });
    it('should teste onFetchData', () => {
      let fakeDispatch = jest.fn();
      mapDispatchToProps(fakeDispatch).onFetchData([]);
      expect(fakeDispatch.mock.calls.length).toBe(1);
    });
    it('should change state', () => {
      let fakeFunc = jest.fn();
      mapStateToProps(fakeFunc).data();
       expect(fakeFunc.mock.calls.length).toBe(1);
       expect(mapStateToProps(fakeFunc).data).toEqual(fakeFunc);
    });


})