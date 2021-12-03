const rotas = (app)=>{
    
    app.get('/', (req, res)=> {
        res.send(`<h1>Bem vindo a loja de informatica</h1>`)
    })
}

module.exports = rotas