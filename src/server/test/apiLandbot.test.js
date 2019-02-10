import axios from 'axios'
import { landBot } from '../constants'

const { headers, API } = landBot

/* eslint-disable */
describe('API landbot check methods', () => { 
  
  test('it should return customer with name and email', async () => {
    expect.assertions(2)
    const response = await axios.get(API.customer.replace(':ID', '4762575'), { headers })
    expect(response.data.customer).toHaveProperty('email', 'al@gmail.com')
    expect(response.data.customer).toHaveProperty('name', 'Psyduck')
  })

  test('it should return customers array lists with name, email and id', async () => {
    const isArray = true
    const customer = {name: 'Psyduck', email: 'al@gmail.com', id: '4762575'}
    const response = await axios.get(API.customers, { headers })
    const customers = response.data.customers.map(customer => ({id: customer.id, name: customer.name, email: customer.email}))
    expect(Array.isArray(customers)).toEqual(isArray)
    expect(Object.keys(customer)).toEqual(expect.arrayContaining(['name', 'email', 'id']))
  })

  test('it should return updated customer name', async () => {
    expect.assertions(1)
    const value = 'Leerooy!!'
    const response = await axios.put(API.updateCustomer.replace(':ID', '4763515').replace(':FIELD', 'name'), { value }, { headers })
    expect(response.data.field).toHaveProperty('value', value)
  })
})