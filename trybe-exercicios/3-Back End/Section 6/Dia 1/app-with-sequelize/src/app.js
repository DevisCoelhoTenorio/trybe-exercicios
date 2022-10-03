// src/app.js

const express = require('express');

const { userRoutes } = require('./routes');

const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());

app.use('/user', userRoutes);

app.use(errorMiddleware);

module.exports = app;