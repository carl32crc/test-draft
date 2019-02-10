import axios from 'axios'
import { domain } from '../../shared/domain'
import { handlerError } from '../../shared/utils/handlerError'

const { apiUrl } = domain

const getCustomers = () => {
  return axios.get(`${apiUrl}getCustomers`).then(response => {
    return handlerError(response)
  })
}

const getCustomer = (id) => {
  return axios.get(`${apiUrl}getCustomer?id=${id}`).then(response => {
    return handlerError(response)
  })
}

const updateCustomer = (id, field, value) => {
  return axios.put(`${apiUrl}updatecustomer`, { field, id, value }).then(response => {
    return handlerError(response)
  })
}

export { getCustomers, getCustomer, updateCustomer }