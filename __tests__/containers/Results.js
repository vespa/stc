import { shallow, mount, render, configure } from 'enzyme';
import React from 'react';
import Results from "containers/Results";
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16'; 
import { connect } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers/index'

configure({ adapter: new Adapter() });

describe('Results', () => {
    let wrapper, store;

    beforeEach(() =>{
        store = createStore(reducers);
        store.dispatch = jest.fn();
        wrapper = shallow(<Results store={store}/>);
    });

    it('maps state and dispatch to props', () => {
        expect(wrapper.props()).toEqual(expect.objectContaining({
            filtered: expect.any(Array),
            activeFilters: expect.any(Number)
        }));
    });
});