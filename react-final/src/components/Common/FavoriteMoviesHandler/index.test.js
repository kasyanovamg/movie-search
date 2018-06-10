import React from 'react'
import FavoriteMoviesHandler from './index'
import { shallow } from 'enzyme';

describe('checks FavoriteMoviesHandler behavior', () => {
    const wrapper = shallow(
        <FavoriteMoviesHandler checked={true} />
    );
    const favoriteMoviesHandler = wrapper.find('.label__checkbox');

    it('checks the FavoriteMoviesHandler property', () => { 
        expect(favoriteMoviesHandler.props().checked).toBe(true);
    });
})