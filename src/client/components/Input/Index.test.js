import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Input from './'

let name = 'name'
let change = ''
let press = 'Enter'

const onBlur = () => {
  return name
}

const onHandleChange = (id, field, value) => {
  change = value
}

const onKeypress = (e) => {
  press = e.key
}

const input = shallow(<Input onBlur={onBlur} onHandleChange={onHandleChange} onKeyPress={onKeypress} />)

/* eslint-disable */
describe('Input component', () => {
  
  it('it should render Input component', () => {
    const wrapper = renderer.create(<Input />);
    let tree = wrapper.toJSON()
    expect(typeof tree).toBe('object')
  })

  it('it should input onBlur simulation', () => {
    input.find('input').simulate('focus')
    input.find('input').simulate('blur')
    expect(name).toBe('name')
  })

  it('it should input change simulation', () => {
    input.find('input').simulate('change', {target: {value: 'TEST'}});
    expect(change).toBe('TEST')
  })

  it('it should input onKeypress simulation', () => {
    input.find('input').simulate('keyPress', {key: 'Enter'})
    expect(press).toBe('Enter')
  })
})