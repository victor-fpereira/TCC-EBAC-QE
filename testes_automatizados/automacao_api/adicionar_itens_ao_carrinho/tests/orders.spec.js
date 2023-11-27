const request = require('supertest');
const { getAcessToken } = require('./login');
const { getUserToken } = require('./customer');
const { getProductToken } = require('./products');

const API_URL = 'http://localhost:3000/api';

describe('(Orders) Adiciona produtos à loja', () => {

    let token;
    let userToken;
    let productToken;

    beforeAll(async () => {
        token = await getAcessToken('admin', 'admin');
        userToken = await getUserToken();
        productToken = await getProductToken();
    });

    it ('Adição de itens ao carrinho', () => {
        request(API_URL)
            .get('/orders')
            .set('Authorization', `Bearer ${token}`)
            .send({
                "customer": {
                  "id": `${userToken}`
                },
                "discount": 0,
                "product": {
                  "id": `${productToken}`
                },
                "quantity": 0,
                "totalPrice": 0
            })
            .expect(200)
            .expect('Content-Type', /json/)
    });

    it ('Deve listar todas as ordens de compra', () => {
        request(API_URL)
            .get('/orders')
            .set('Authorization', `Bearer ${token}`)
            .expect(200)
            .expect('Content-Type', /json/)
    });
});
