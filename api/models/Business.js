
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
    product_name: {
    type: String
  },
  product_category: {
    type: String
  },
  product_Price: {
    type: Number
  },
  product_Size: {
      type: Number
  },
  product_stock: {
      type: String
  },
  product_description:{
      type: String
  }

},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);
