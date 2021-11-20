const express = require('express')
const app = express()
const port = 3000
const middleware = require('./controller/midlewares')
const produtos = require('./controller/produtos_controllers')
const produtos_database = require('./database/sqlite')
const rota = require('./controller/rotas')

middleware(app)
produtos(app,produtos_database)
rota(app)
app.listen(3000, console.log(`servidor rodando na porta 3000, link http://localhost:${port}/`))