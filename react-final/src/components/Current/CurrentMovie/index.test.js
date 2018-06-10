import React from 'react'
import CurrentMovie from './index'
import { shallow } from 'enzyme';

describe('checks the CurrentMovie component', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
        <CurrentMovie
            current={{ id: 1, title: 'test title', director: ['test'], genres: ['genres'] }}
            favorites={{ids: [1, 2, 3]}} />
    );
    const currentMovie = wrapper.find('div').first();

    it('checks if the CurrentMovie component renders', () => {
        expect(currentMovie.length).toBeGreaterThan(0);
    });
    it('checks if the CurrentMovie title renders', () => {
        expect(wrapper.find('.current').find('.current__info').find('.current__main-info').find('.current__title').text()).toBe('test title');
    });
})