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

    let wrapper, store;

    beforeEach(() =>{
        store = createStore(reducers);
        store.dispatch = jest.fn();
        wrapper = shallow(<AppContainer store={store}/>);
    });

    it('maps state and dispatch to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining({
            onFetchData: expect.any(Function)
        }));
    });

   it('maps onIncrement to dispatch increment action', () => {
        wrapper.props().onFetchData();
        expect(store.dispatch).toHaveBeenCalledWith({type: 'DATA_FETCHED'});
    });

})