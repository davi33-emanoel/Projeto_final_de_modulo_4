const express = require('express')
 const middleware = (app) => {
    app.use(express.json())
    app.use((req, res, next) => {
            next();

    })
}
module.exports = middleware;