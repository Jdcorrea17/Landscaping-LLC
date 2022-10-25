const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()


const {PORT} = process.env

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './homepage.html'))
})
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, './thanks.html'))
})

app.use(express.static(path.join(__dirname, './server')))


app.listen(PORT, () => {console.log(`Listening on port 5432`)})
