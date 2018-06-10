import React from 'react'
import CommonMovieGrid from './index'
import { shallow } from 'enzyme';

describe('checks MovieGrid component', () => {
    it('checks whats rendered when movies are not loaded', () => {
        const wrapper = shallow(
            <CommonMovieGrid
                loading={true} errored={false} movies={[
                    { title: 'test1', id: 1 },
                    { title: 'test2', id: 2 }]} />
        );
        const container = wrapper.find('div').children();
        expect(container.find('div').first().hasClass('loader')).toBe(true);
    })
    it('checks whats rendered when movies have error', () => {
        const wrapper = shallow(
            <CommonMovieGrid
                loading={false} errored={true} movies={[
                    { title: 'test1', id: 1 },
                    { title: 'test2', id: 2 }]} />
        );
        const container = wrapper.find('div').children();
        expect(container.find('div').first().hasClass('error')).toBe(true);
    })
    it('checks whats rendered when movies are loaded', () => {
        const wrapper = shallow(
            <CommonMovieGrid
                loading={false} errored={false} movies={[
                    { title: 'test1', id: 1 },
                    { title: 'test2', id: 2 }]} />
        );
        const container = wrapper.find('div').children();
        expect(container).toHaveLength(2);
    })
})