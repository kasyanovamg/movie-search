import React from 'react'
import Current from './index'
import { shallow } from 'enzyme';

describe('checks the Current component', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
        <Current current={[{director: ['director 1']}]}
        fetchCurrentMovieData={onClick}/>
    );
    const current = wrapper.find('div').first();

    it('checks if the Current component renders', () => {
        expect(current.length).toBeGreaterThan(0);
    });
})