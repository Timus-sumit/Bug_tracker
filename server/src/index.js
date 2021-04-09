const express = require('express');
require('./db/mongoose')
const User = require('./models/users')
const port = process.env.PORT || 8080
const userRouter = require('./routers/users')
const projectRouter = require('./routers/project');
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


app.use(userRouter)
app.use(projectRouter)


app.listen(port , ()=>{
    console.log('server is runnig on '+port)
})