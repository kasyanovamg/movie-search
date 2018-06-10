import React from 'react'
import SearchResults from './index'
import { shallow } from 'enzyme';

describe('checks the SearchResults component', () => {
    const wrapper = shallow(
        <SearchResults />
    );
    const searchResults = wrapper.find('.search-results');

    it('checks if the SearchResults component renders', () => {
        expect(searchResults.length).toBeGreaterThan(0);
    });
})