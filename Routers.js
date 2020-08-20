// Routers.js

const express = require('express');
const Routers = express.Router();
const User = require('./users');
// const Feed = require('./users');


Routers.route('/add').post(function (req, res) {
  const user = new User.User(req.body);
  console.log(user);
  user.save()
    .then(user => {
      res.json('User details added successfully.');
    })
    .catch(err => {
      res.status(400).send("Unable to add user details in database.");
    });
});

Routers.route('/feed').post(function (req, res) {
  const iotfeed = new User.Feed(req.body);
  console.log(iotfeed);
  iotfeed.save()
    .then(iotfeed => {
      res.json('IOT feed added successfully.');
    })
    .catch(err => {
      res.status(400).send("Unable to add IOT feed.");
    });
});

module.exports = Routers;