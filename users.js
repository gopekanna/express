// users.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  name: {
    type: String
  },
  email: {
      type: String
  },
  address: {
    type: String
  }
},{
    collection: 'users'
});

const Feed = new Schema({
  FloorAddress: {
    type: String
  },
  BeaconAddress: {
    type: String
  },
  RepeaterAddress: {
      type: String
  },
  RSSI: {
    type: String
  },
  GatewayAddress: {
    type: String
  }
},{
    collection: 'tags'
});

// module.exports = mongoose.model('User', User);
const userSchema = mongoose.model('User', User);
const feedSchema = mongoose.model('Feed', Feed);

module.exports = { User: userSchema, Feed: feedSchema }