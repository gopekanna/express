// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000
const config = require('./backend');
const Routers = require('./Routers');
const {GraphQ, schema} = require('./graph');
const { Router } = require('express');

mongoose.connect(config.DB, { useUnifiedTopology: true,useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/secur', Routers);
app.use('/graphql', GraphQ({
  schema: schema,
  graphiql: true
}));

app.listen(PORT, () => {
  console.log('Server is running on PORT:',PORT);
});