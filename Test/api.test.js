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
describe('Teste da rota Get pelo id',() => {
    test('Testando status 200',() => {
        return request(app).get('/produtos/id')
        .then((response) =>{
            expect(response.status).toBe(200)
        })
        
    })
})
describe('Teste da rota Post',() => {
    test('Testando status 201',() => {
        return request(app).post('/produtos')
        .then((response) =>{
            expect(response.status).toBe(201)
        })
        
    })
})
describe('Teste da rota Patch',() => {
    test('Testando status 200',() => {
        return request(app).patch('/produtos/:id')
        .then((response) =>{
            expect(response.status).toBe(200)
        })
        
    })
})
describe('Teste da rota Delete',() => {
    test('Testando status 200',() => {
        return request(app).delete('/produtos/id')
        .then((response) =>{
            expect(response.status).toBe(200)
        })
        
    })
})
describe('Teste erro na rota Get',() => {
    test('Testando status 404',() => {
        return request(app).get('/produto')
        .then((response) =>{
            expect(response.status).toBe(404)
        })
        
    })
})
describe('Teste erro na rota Get por id',() => {
    test('Testando status 404',() => {
        return request(app).get('/produtos//')
        .then((response) =>{
            expect(response.status).toBe(404)
        })
        
    })
})

describe('Teste erro na rota post',() => {
    test('Testando status 404',() => {
        return request(app).post('/produtos//')
        .then((response) =>{
            expect(response.status).toBe(404)
        })
        
    })
})
describe('Teste erro na rota patch com id',() => {
    test('Testando status 404',() => {
        return request(app).patch('/produtos//id/')
        .then((response) =>{
            expect(response.status).toBe(404)
        })
        
    })
})
describe('Teste erro na rota delete com id',() => {
    test('Testando status 404',() => {
        return request(app).patch('/produtos//id/')
        .then((response) =>{
            expect(response.status).toBe(404)
        })
        
    })
})