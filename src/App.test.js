import React from 'react';
import { shallow } from 'enzyme'

import TestComponent from './components/testComponent'

describe('my beverage', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<TestComponent />);
  });

  it('renders without crashing', () => {
    const value = 2 + 2;
    expect(wrapper.find("h1")).toHaveLength(1);
 
    
  });

});

