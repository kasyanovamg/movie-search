import React from 'react'
import Movie from './index'
import { shallow } from 'enzyme';

describe('checks the Movie component', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
    <Movie movie={{
                title: 'test title',
                id: 1,
                director: ['test director'],
                posterUrl: 'testURL',
                year: 2018,
                genres: ['test', 'test']
            }}
            addToFav={onClick}
            removeFromFav={onClick}
            favorites={{ids: [1, 2, 3]}}
            removeFavorite={onClick}
            fetchSameDirector={onClick} />
    );
    const movie = wrapper.find('.movie');

    it('checks if the movie component renders', () => {
        expect(movie.length).toBeGreaterThan(0);
    });
})