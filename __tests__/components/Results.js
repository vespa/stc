import React from "react";
import Results from "components/Results";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers/index'

import renderer from 'react-test-renderer';
let store = createStore(reducers);

describe("Results", ()=>{
    it('should render correctly', () => {

     var mock = [
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
          id: 3,
          type: 'train',
          brand: 'USRA 0-6-6',
          colors: ['yellow', 'white', 'black'],
          img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/UP_4466_Neil916.JPG/600px-UP_4466_Neil916.JPG'
    }
     ]

     const component = renderer.create(
		<Provider store={store}>
			<Results filtered={mock} />
		</Provider>
      );

     let tree1 = component.toJSON();
     expect(tree1).toMatchSnapshot();

   });
})