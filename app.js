require('dotenv').config()

const express = require('express')
const router = require('./routers')
const authRouter = require('./routers/auth')
const app = express()
const port = 3000

app.use(router)
app.use('/auth', authRouter)

app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
