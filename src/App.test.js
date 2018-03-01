import React from 'react';
import { shallow } from 'enzyme'
import { FormUser } from './components/form'

let initialState = {
  name: undefined,
  age: undefined,
  country: "Afghanistan",
  day: new Date().getDate(),
  month: (new Date().getMonth() + 1),
  date: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear(),
  year: new Date().getFullYear()
}
let wrapper
let instance
let userApp = {
  countries: [
    { 'name': 'ciudad1' },
    { 'name': 'ciudad2' },
    { 'name': 'ciudad3' }
  ]
}

describe('FormUser component', () => {
  
  beforeAll(() => {
    wrapper = shallow(<FormUser getCountries={jest.fn()} setHistoric={jest.fn()} userApp={userApp} />);
    instance = wrapper.instance()
  })

  describe('onrender', () => {
    it('initial state', () => {
     // console.log(wrapper.state());

      const { month, name } = initialState
      expect(wrapper.state()).toBeTruthy();
      expect(wrapper.state('name')).toBe(name);
      expect(wrapper.state('month')).toBe(month);

    });

    it('render jsx', () => {
      expect(wrapper.find('form')).toHaveLength(1);
      expect(wrapper.find('label')).toHaveLength(3);
      expect(wrapper.find('Button')).toHaveLength(1);
      expect(wrapper.find('Col')).toHaveLength(6);
      expect(wrapper.find('select')).toHaveLength(1);
      expect(wrapper.find('input')).toHaveLength(2);
    });

    it('should not call setHistoric on onRender', () => {
      expect(instance.props.setHistoric.mock.calls.length).toBe(0);
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
    it('should call handleSubmit on FormUser', () => {
      wrapper.find('Button').simulate('click');
      expect(instance.props.setHistoric.mock.calls.length).toBe(1);
    });

  });
});

