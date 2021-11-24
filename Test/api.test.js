const request = require('supertest')
const app = require('../app')

describe('Teste da rota Get',() => {
    test('Testando status 200',() => {
        return request(app).get('/produtos')
        .then((response) =>{
            expect(response.status).toBe(200)
        })
        
    })
})