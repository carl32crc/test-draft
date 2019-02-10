import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

const app = shallow(<App />)
/* eslint-disable */
describe('App component', () => {
  
  it('it should start correct state', () => {
    const openModal = app.state().open
    const customers = app.state().customers
    const customer = app.state().customer
    const updateCustomer = app.state().updateCustomer
    const spinner = app.state().spinner
    const modalSpinner = app.state().modalSpinner
    const alertState = app.state().alert
    const paramsState = app.state().params
    let alert = {
      show: false,
      message: '',
      color: ''
    }
    let params = {
      id: '',
      field: '',
      value: ''
    }
    expect(openModal).toEqual(false)
    expect(customers).toEqual([])
    expect(customer).toEqual({})
    expect(updateCustomer).toEqual({})
    expect(spinner).toEqual(true)
    expect(modalSpinner).toEqual(false)
    expect(alertState).toEqual(alert)
    expect(paramsState).toEqual(params)
  })

  it('it should render App component', () => {
    const wrapper = renderer.create(<App />);
    let tree = wrapper.toJSON()
    expect(typeof tree).toBe('object')
  })

  it('it should close instance modal App component', () => {
    app.instance().closeModal()
    expect(app.state().open).toBe(false)
  })

  it('it should close alert message App component', () => {
    app.instance().closeAlert()
    expect(app.state().alert.show).toBe(false)
  })

  it('it should onHandleChange App component', () => {
    app.instance().onHandleChange('44', 'name', 'hello')
    expect(app.state().params.id).toEqual('44')
    expect(app.state().params.field).toEqual('name')
    expect(app.state().params.value).toEqual('hello')
  })

  it('it should get info customer App component', () => {
    app.instance().infoCustomer('4762575')
    setTimeout(() => { 
      expect(app.state().customer.name).toEqual('Psyduck')
      expect(app.state().modalSpinner).toBe(true)
    }, 2000)
  })

  it('it should update customer App component', () => {
    app.instance().updateCustomer('4763515', 'name', 'Leerooy!!')
    setTimeout(() => { 
      expect(app.state().customer.alert.message).toEqual('Success save Leerooy!!')
      expect(app.state().modalSpinner).toBe(true)
    }, 2000)
  })

  it('it should return Invalid email', () => {
    app.instance().valideteEmail('452174', 'email', 'myemail')
    setTimeout(() => {
      expect(app.state().customer.alert.message).toEqual('Invalid Email')
    }, 2000)
  })
})
