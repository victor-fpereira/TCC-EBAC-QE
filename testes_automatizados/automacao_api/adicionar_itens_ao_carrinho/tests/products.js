const request = require('supertest');
const { getAcessToken } = require('./login');
import { faker } from "@faker-js/faker"

const API_URL = 'http://localhost:3000/api';

let getProductToken = () => {

    let token = getAcessToken('admin', 'admin');

    it ('Adiciona produto', () => {
        request(API_URL)
        .post('/products')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "description": `${faker.commerce.productDescription()}`,
            "itemPrice": `${faker.commerce.price()}}`,
            "name": `${faker.commerce.productName()}`,
            })
        .then(response => {
            return response.body.data.id
        })
    });
};
