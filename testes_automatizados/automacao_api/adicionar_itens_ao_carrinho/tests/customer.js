const request = require('supertest');
const { getAcessToken } = require('./login');
import { faker } from "@faker-js/faker"

const API_URL = 'http://localhost:3000/api';

let getUserToken = () => {

    let userToken
    let token = getAcessToken('admin', 'admin');

    request(API_URL)
        .post('/customers')
        .set('Authorization', `Bearer ${token}`)
        .send({
            "address": {
                "id": `${faker.address.streetAddress()}`,
            },
            "email": `${faker.internet.email()}`,
            "firstName": `${faker.name.firstName()}`,
            "lastName": `${faker.name.lastName()}`,
            "phone": `${faker.phone.number()}`
        })
        .then(response => {
            return response.body.data.id
        })
};

module.exports = { getUserToken }
