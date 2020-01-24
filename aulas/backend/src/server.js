const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes'); 

const server = express();

mongoose.connect('mongodb+srv://omnistack:123@cluster0-vjdxx.azure.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
 
server.use(express.json());
server.use(routes);

server.listen(3333);