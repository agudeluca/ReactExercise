import React from 'react';
import { shallow } from 'enzyme'
import { FormUser } from './components/form'
import configureMockStore from 'redux-mock-store'
import { createStore } from 'redux';
const middlewares = []
const mockStore = configureMockStore(middlewares)
const reducer = state => state;
const dispatch = jest.fn();
const store = {
  ...createStore(reducer, {}),
  dispatch,
};
describe('my beverage', () => {
  let wrapper
  let instance
  let getCountriesSpy;
  let userApp = {
    countries: [
      { 'name': 'ciudad1' },
      { 'name': 'ciudad2' },
      { 'name': 'ciudad3' }
    ]
  }

  beforeEach(() => {
    getCountriesSpy = jest.fn()
    wrapper = shallow(<FormUser getCountries={getCountriesSpy} userApp={userApp} />);
    instance = wrapper.instance()
  });



  describe('render', () => {
    it('renders without crashing', () => {
      // console.log(wrapper.debug())
      expect(wrapper.state('country')).toBe('Afghanistan');
    });
    it('render jsx', () => {
      expect(wrapper.find('form')).toHaveLength(1);
      expect(wrapper.find('label')).toHaveLength(3);
      expect(wrapper.find('Button')).toHaveLength(1);
      expect(wrapper.find('Col')).toHaveLength(6);
      expect(wrapper.find('select')).toHaveLength(1);
      expect(wrapper.find('input')).toHaveLength(2);

    });
  });
  describe('lifeCycle', () => {
    it('should call getCountries on ComponentDidMount', () => {
      expect(instance.props.getCountries.mock.calls.length).toBe(1);
    });
  });

  describe('innerFunctions', () => {
    it('should call countriesOptions on FormUser', () => {
      expect(instance.countriesOptions()).toBeTruthy();
    });
  });
});

