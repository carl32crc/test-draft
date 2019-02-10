import express from 'express'
const app = express()

import landbot from './landbot'

app.use(landbot)

export default app