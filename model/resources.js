var mongoose = require('mongoose');

var Resource = new mongoose.Schema({
  type: String,
  resource: String,
  description: String,
  items: Array,
  images: Array,
  constraints: [
  	{
  		key: String,
  		value: String
  	}
  ],
  price : String,
  status: String

});

module.exports = mongoose.model('Resource', Resource);