const rotas = (app)=>{
    
    app.get('/', (req, res)=> {
        res.send(`<h1>I'm not Dead</h1>`)
    })
}

module.exports = rotas