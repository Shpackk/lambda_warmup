require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const authRouter = require('../auth/routers/authRouter')
const userRouter = require('../auth/routers/userRouter')
const errorHanlder = require('../auth/middleware/errorHandler')

app.use(express.json())
app.use(authRouter)
app.use(userRouter)
app.use(errorHanlder)


app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})
