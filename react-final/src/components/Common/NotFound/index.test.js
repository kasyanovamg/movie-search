import React from 'react'
import NotFound from './index'
import { shallow } from 'enzyme';

describe('checks the NotFound component', () => {
    const wrapper = shallow(
        <NotFound />
    );
    const notFound = wrapper.find('.notFound');

    it('checks if the NotFound component renders', () => {
        expect(notFound.length).toEqual(1);
    });
})