// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000
const config = require('./backend');
const Routers = require('./Routers');

mongoose.connect(config.DB, { useUnifiedTopology: true,useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', Routers);

app.listen(PORT, () => {
  console.log('Server is running on PORT:',PORT);
});