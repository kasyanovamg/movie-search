import React from 'react'
import Footer from './index'
import { shallow } from 'enzyme';

describe('checks the footer', () => {
    const wrapper = shallow(
        <Footer />
    );
    const footer = wrapper.find('.footer');

    it('checks if the footer renders', () => { 
        expect(footer.length).toBeGreaterThan(0);
    });
})