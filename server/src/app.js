const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.json())

app.listen(process.env.PORT || 8081)

app.post('/register', (req, res) => {
    res.send({
        message:'Your user has been register!'
    })
})