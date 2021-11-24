const app = require('./app.js')
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`servidor rodando na porta 3000, link http://localhost:${PORT}/`))