import React from "react";
import FilterSelect from "components/FilterSelect";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers/index'

import renderer from 'react-test-renderer';
let store = createStore(reducers);

describe("FilterSelect", ()=>{
    it('should render correctly', () => {
     const component = renderer.create(
		<Provider store={store}>
			<FilterSelect 
                filter="FILTER_VEHICLE"
                options={['green', 'purple']}
                onChange= {() => {}}
                noActiveFilters={false}
                />
		</Provider>
      );

     let tree1 = component.toJSON();
     expect(tree1).toMatchSnapshot();

     const component2 = renderer.create(
        <Provider store={store}>
            <FilterSelect 
                filter="FILTER_VEHICLE"
                options={['green']}
                onChange= {() => {}}
                noActiveFilters={false}
                />
        </Provider>
      );

     let tree2 = component2.toJSON();
     expect(tree2).toMatchSnapshot();

    });
})