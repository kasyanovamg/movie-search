import React from 'react'
import Header from './index'
import { shallow } from 'enzyme';

describe('checks the header', () => {
    const wrapper = shallow(
        <Header />
    );
    const header = wrapper.find('.header');

    it('checks if the header renders', () => { 
        expect(header.length).toBeGreaterThan(0);
    });
})