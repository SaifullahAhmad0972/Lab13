const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');

describe("Test the root path", () => {
    test("It should response the GET method", () => {
            const response = request(app).post("http://localhost:5000/User/add"
            ).send({
                "Name": "test",
                "Email": "saod",
                "age": 12,
                "Contact": 1234567890
        })
        expect(response.statusCode).toBe(200);
    })
});

describe("Test the root path with only one input", () => {
    test("It should response the GET method with one input", () => {
            const response = request(app).post("http://localhost:5000/User/add"
            ).send({
                "Name": "test",
        })
        expect(response.statusCode).toBe(200);
    })
});

describe("Test the delete method", () => {
    test("It should response the GET method  for the delete method", () => {
            const response = request(app).post("http://localhost:5000/User/delete"
            ).send({
                "Name": "test",
                "Email": "saod",
                "age": 12,
                "Contact": 1234567890
        })
        expect(response.statusCode).toBe(200);
    })
});


