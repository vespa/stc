import React from "react";
import {ImageLoader } from 'containers/ImageLoader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers/index'
import renderer from 'react-test-renderer';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



describe('ImageLoader', () => {
    let wrapper,
        store =createStore(reducers);

    it('should render correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
          <ImageLoader src="none" />
      </Provider>
    );
        let tree1 = component.toJSON();
        expect(tree1).toMatchSnapshot();
    });


    beforeEach(() =>{
        store = createStore(reducers);
        store.dispatch = jest.fn();
        wrapper = shallow(<ImageLoader src="./img/logo.png" store={store}/>);
    });

    test('set a valid image', ()=>{
        wrapper.instance()._setValidImage("./img/logoeee.png");
        expect(wrapper.instance().state.currentImage.props.src).toBe("./img/logoeee.png");
        expect(wrapper.instance().state.currentImage.type).toBe("img");
    });

    test('set a 404 image', ()=>{
        wrapper.instance()._setNotFoundImage();
        expect(wrapper.instance().state.currentImage.props.src).toBe(wrapper.instance().state.notFound);
        expect(wrapper.instance().state.currentImage.type).toBe("img");
    })
    test('loadImage image: update image', ()=>{
       expect(wrapper.instance()._loadImage()).toEqual("./img/logo.png");
    })
});