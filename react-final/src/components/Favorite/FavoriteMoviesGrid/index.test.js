import React from 'react'
import FavoriteMoviesGrid from './index'
import { shallow } from 'enzyme';

describe('checks the FavoriteMoviesGrid component', () => {
    const func=jest.fn()
    const wrapper = shallow(
        <FavoriteMoviesGrid fetchFavorite={func} />
    );
    const favoriteMoviesGrid = wrapper.find('CommonMovieGrid');

    it('checks if the FavoriteMoviesGrid component renders', () => {
        expect(favoriteMoviesGrid.length).toBeGreaterThan(0);
    });
})