const express = require('express')
const app = express()
const middleware = require('./controller/midlewares')
const produtos = require('./controller/produtos_controllers')
const produtos_database = require('./database/sqlite')
const rota = require('./controller/rotas')

middleware(app)
produtos(app,produtos_database)
rota(app)
module.exports=app;