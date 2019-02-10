import axios from 'axios'
import { landBot } from '../../../../constants'

const { headers, API } = landBot

export default function (req, res) {
  const { field, id, value } = req.body

  axios.put(API.updateCustomer.replace(':ID', id).replace(':FIELD', field), { value }, { headers })
    .then(customer => res.status(200).json({ data: customer.data }))
    .catch(error => res.status(error.response.status).json({status: error.response.status, error: error.response.data.detail}))
}