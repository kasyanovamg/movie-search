import React from 'react'
import CurrentMovieGrid from './index'
import { shallow } from 'enzyme';

describe('checks the CurrentMovieGrid component', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
        <CurrentMovieGrid fetchSameDirector={onClick} moviesBySameDirector={['test']}/>
    );
    const currentMovieGrid = wrapper.find('CommonMovieGrid');

    it('checks if the CurrentMovieGrid component renders', () => {
        expect(currentMovieGrid.length).toBeGreaterThan(0);
    });
})