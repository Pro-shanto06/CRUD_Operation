const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}));

app.use('/employees', employeeRoutes);

module.exports = app;