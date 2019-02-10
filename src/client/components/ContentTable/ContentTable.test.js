import React from 'react'
import ContentTable from './'
import { shallow } from 'enzyme'

let open = false

const openModal = () => {
  open = true
}

const contentTable = shallow(<ContentTable openModal={openModal} />)

/* eslint-disable */
describe('ContentTable component', () => {
  
  it('it should not render ContentTable component', () => {
    const component = contentTable.contains(<ContentTable />)
    expect(component).toBe(false)
  })

  it('it should open modal simulation', () => {
    contentTable.find('tr').simulate('click')
    expect(open).toBe(true)
  })
})