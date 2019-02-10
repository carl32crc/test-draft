import { getCustomer, getCustomers, updateCustomer } from './customers'

/* eslint-disable */
describe('API landbot check methods', () => { 
  
  test('it should return customer with name and email', async () => {
    getCustomer('4762575').then(response => {
        expect(response.data).toHaveProperty('email', 'al@gmail.com')
        expect(response.data).toHaveProperty('name', 'Psyduck')
    })
  })

  test('it should return customers array lists with name, email and id', () => {
    const isArray = true
    getCustomers().then(response => {
      expect(Array.isArray(response.data)).toEqual(isArray)
      expect(Object.keys(response.data[0])).toEqual(expect.arrayContaining(['name', 'email', 'id']))
    })
  })

  test('it should return updated customer name', async () => {
    const value = 'Leerooy!!'
    updateCustomer('4763515', 'name', value).then(response => {
      expect(response.data.field).toHaveProperty('value', value)
    })
  })
})