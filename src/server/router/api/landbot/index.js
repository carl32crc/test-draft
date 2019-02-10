import express from 'express'

const router = express.Router()

import getCustomers from './handlers/getCustomers'
import getCustomer from './handlers/getCustomer'
import updateCustomer from './handlers/updateCustomer'

router.get('/getCustomers', getCustomers)
router.get('/getCustomer', getCustomer)
router.put('/updatecustomer', updateCustomer)

export default router