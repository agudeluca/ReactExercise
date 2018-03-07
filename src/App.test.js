import React from 'react';
import { shallow } from 'enzyme'
import { FormUser } from './components/form'
import { createStore } from 'redux';

describe('my test', () => {
  let wrapper
  let instance
  let getCountriesSpy; //la referencia queda ligada.
  let userApp = {
    countries: [
      { 'name': 'ciudad1' },
      { 'name': 'ciudad2' },
      { 'name': 'ciudad3' }
    ]
  }

  beforeAll(() => {
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
      //si existe 
      //props que recibe
      //separar 
      expect(wrapper.find('label')).toHaveLength(3);
      expect(wrapper.find('Button')).toHaveLength(1);
      expect(wrapper.find('Col')).toHaveLength(6);
      expect(wrapper.find('select')).toHaveLength(1);
      expect(wrapper.find('input')).toHaveLength(2);

    });
  });

  describe('lifeCycle', () => {
    it('should call getCountries on componentWillMount', () => {
      expect(instance.props.getCountries.mock.calls.length).toBe(1);
    });
  });

  describe('innerFunctions', () => {
    it('should call countriesOptions on FormUser', () => {
      expect(instance.countriesOptions()).toBeTruthy();
    });
  });
});

