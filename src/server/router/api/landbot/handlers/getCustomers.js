import axios from 'axios'
import { landBot } from '../../../../constants'

const { headers, API } = landBot

export default function (req, res) {
  axios.get(API.customers, { headers })
    .then(response => {
      const customers = response.data.customers.map(customer => ({id: customer.id, name: customer.name, email: customer.email})) 
      res.status(200).json({data: customers, total: response.data.total})
    })
    .catch(error => res.status(error.response.status).json({status: error.response.status, error: error.response.data.detail}))
}