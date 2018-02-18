import React from "react";
import App from "containers/App";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers/index'

import renderer from 'react-test-renderer';
let store = createStore(reducers);

describe("App", ()=>{
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
})