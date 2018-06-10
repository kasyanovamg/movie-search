import React from 'react'
import Favorite from './index'
import { shallow } from 'enzyme';

describe('checks the Favorite component', () => {
    const wrapper = shallow(
        <Favorite />
    );
    const favorite = wrapper.find('div').first();

    it('checks if the Favorite component renders', () => {
        expect(favorite.length).toBeGreaterThan(0);
    });
    it('checks if the Favorite component has SearchResults component in it', () => {
        expect(favorite.find('SearchResults').length).toBeGreaterThan(0);
    });
    it('checks if the Favorite component has FavoriteMoviesGrid component in it', () => {
        expect(favorite.find('FavoriteMoviesGrid').length).toBeGreaterThan(0);
    });
})