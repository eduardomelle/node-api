const express = require('express')
const mongoose = require('mongoose')

// Iniciando o App
const app = express()

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })

// Primeira rota
app.get('/', (req, resp) => {
    resp.send('Hello Rocketseat!')
})

app.listen(3001)