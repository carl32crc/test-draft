import axios from 'axios'
import { landBot } from '../../../../constants'

const { headers, API } = landBot

export default function (req, res) {  
  const { id } = req.query

  axios.get(API.customer.replace(':ID', id), { headers })
    .then(customer => {
      const { name, email, country, avatar } = customer.data.customer
      res.status(200).json({data: { name, email, country, avatar }})
    
    })
    .catch(error => res.status(error.response.status).json({status: error.response.status, error: error.response.data.detail}))
}