const express = require('express') 
require ( 'dotenv' ) . config ( )
const mongoose = require('mongoose')
const rotas = require('./task/task.routes')


const mongoUrl= process.env.DATABASE_URL
mongoose.connect(mongoUrl,{ useNewUrlParser: true, useUnifiedTopoLogy:true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB deu erro'))

const app = express()
app.use(express.json())
app.use(rotas)
const port = process.env.PORT_SERVER

app.listen(port, () => {
    console.log(`Servidor rodando na http://localhost:${port}`)
}) 