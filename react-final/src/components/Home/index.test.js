import React from 'react'
import Home from './index'
import { shallow } from 'enzyme';

describe('checks the Home component', () => {
    const wrapper = shallow(
        <Home />
    );
    const home = wrapper.find('div').first();

    it('checks if the Home component renders', () => {
        expect(home.length).toBeGreaterThan(0);
    });
    it('checks if the Home component has SearchResults component in it', () => {
        expect(home.find('SearchResults').length).toBeGreaterThan(0);
    });
    it('checks if the Home component has MovieGrid component in it', () => {
        expect(home.find('MovieGrid').length).toBeGreaterThan(0);
    });
})