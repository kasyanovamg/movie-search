import React from 'react'
import SearchByBtn from './index'
import { mount } from 'enzyme'


describe('checks the SearchBy button', () => {
    const onClick = jest.fn();
    const wrapper = mount(
        <SearchByBtn onClick={() => onClick()} 
        btnClass={'testClass'} text={'testText'} />
    );
    const button = wrapper.find('button');

    it('simulates click events', () => { 
        expect(onClick).toHaveBeenCalledTimes(0);
        button.simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
    
    it('checks class name', () => {
        expect(button.hasClass('testClass')).toBe(true);
    })
})