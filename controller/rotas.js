const rotas = (app)=>{
    
    app.get('/', (req, res)=> {
        res.send(`<h1>Bem vindo a to do api</h1>`)
    })
}

module.exports = rotas