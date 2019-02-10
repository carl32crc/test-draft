import React from 'react'
import HeaderTable from './'
import { shallow } from 'enzyme'

/* eslint-disable */
describe('HeaderTable component', () => {
  
  it('it should return message if array length is 0', () => {
    const wrapper = shallow(<HeaderTable customers={[]}/>)
    const text = wrapper.find('h1').text()
    expect(text).toEqual('The list of customers is empty')   
  })

  it('it should return message if array length is more than 0', () => {
    const wrapper = shallow(<HeaderTable customers={[1,2]}/>)
    const text = wrapper.find('th').first().text()
    expect(text).toEqual('Name')   
  })
})
