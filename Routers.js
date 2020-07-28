// Routers.js

const express = require('express');
const Routers = express.Router();
const User = require('./users');

Routers.route('/add').post(function (req, res) {
  const user = new User(req.body);
  console.log(user);
  user.save()
    .then(user => {
      res.json('User details added successfully.');
    })
    .catch(err => {
      res.status(400).send("Unable to add user details in database.");
    });
});

module.exports = Routers;