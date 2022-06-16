const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routes = require('./routes/data');
mongoose.connect('mongodb://localhost:27017/corses');
app.use(express.json());

app.use('/',routes);

app.listen(3000,()=>console.log('express started!'));