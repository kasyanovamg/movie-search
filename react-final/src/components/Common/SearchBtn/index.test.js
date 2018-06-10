import React from 'react'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import SearchBtn from './index'
import { mount } from 'enzyme'

describe('checks the search button', () => {
    const onClick = jest.fn();
    const wrapper = mount(
        <BrowserRouter>
            <Route path="/">
                <SearchBtn search='/test' onClick={() => onClick()} />
            </Route>
        </BrowserRouter>
    );

    it('simulates click events', () => { 
        const button = wrapper.find('button');
        expect(onClick).toHaveBeenCalledTimes(0);
        button.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
    
    it('checks the prperty of href', () => {
        const link = wrapper.find('a');
        expect(link.prop('href')).toBe('/test');
    })
})
