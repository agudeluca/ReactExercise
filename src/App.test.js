import React from 'react';
import { shallow } from 'enzyme'
import TestComponent from './components/testComponent'

describe('my beverage', () => {
  let wrapper
  let instance
  beforeEach(() => {
    wrapper = shallow(<TestComponent />);
    instance = wrapper.instance()
  });

  it('renders without crashing', () => {
    expect(instance._functionToTest()).toBe("stringTest");
  });

  it('renders without crashing', () => {
    expect(wrapper.find("h1")).toHaveLength(3);
  });

  it('renders without crashing', () => {
    expect(wrapper.find("div")).toHaveLength(1);
  });
});

