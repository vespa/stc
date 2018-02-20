import React from "react";
import FilterList from "components/FilterList";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers/index'
import renderer from 'react-test-renderer';

let store = createStore(reducers);

describe("FilterList", ()=>{
    it('should render correctly', () => {
     const component = renderer.create(
		<Provider store={store}>
			<FilterList filterActive={false} onClick={()=>{}} />
		</Provider>
      );

     let tree1 = component.toJSON();
     expect(tree1).toMatchSnapshot();

     const component2 = renderer.create(
  		<Provider store={store}>
  			<FilterList filterActive={true} onClick={()=>{}} />
  		</Provider>
      );

     let tree2 = component2.toJSON();
     expect(tree2).toMatchSnapshot();

     const component3 = renderer.create(
    <Provider store={store}>
      <FilterList filterActive={true} activeList={[{type:"test", filter:"car"}]} onClick={()=>{}} />
    </Provider>
      );

     let tree3 = component3.toJSON();
     expect(tree3).toMatchSnapshot();
   });



})
