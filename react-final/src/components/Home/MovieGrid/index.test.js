import React from 'react'
import MovieGrid from './index'
import { shallow } from 'enzyme';

describe('checks the MovieGrid component', () => {
    const func = jest.fn();
    const wrapper = shallow(
        <MovieGrid fetchData={func} searchQuery={'test'}/>
    );
    const movieGrid = wrapper.find('CommonMovieGrid');

    it('checks if the Favorite component renders CommonMovieGrid', () => {
        expect(movieGrid.length).toBeGreaterThan(0);
    });

})