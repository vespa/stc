import { shallow, mount, render, configure } from 'enzyme';
import React from 'react';
import FilterList from "containers/FilterList";
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16'; 
import { connect } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers/index'

configure({ adapter: new Adapter() });

describe('FilterList', () => {
    let wrapper, store;

    beforeEach(() =>{
        store = createStore(reducers);
        store.dispatch = jest.fn();
        wrapper = shallow(<FilterList store={store}/>);
    });

    it('maps state and dispatch to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining({
            filterActive: expect.any(Boolean),
            onClick: expect.any(Function),
            activeList: expect.any(Array),
        }));
    });


   it('maps change', () => {
      let eventType = {
          preventDefault : () =>{}
      }
      wrapper.props().onClick(eventType)
      expect(store.dispatch).toHaveBeenCalledWith({"filter":"0","type": "FILTER_REMOVE"});
    });

});