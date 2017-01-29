var mongoose = require('mongoose');

var RootResource = new mongoose.Schema({
  name: String,
  type: String,
  address: String,
  description: String,
  resources: Array,
  category: {
  	id: String,
  	group: String
  }

});

module.exports = mongoose.model('RootResource', RootResource);