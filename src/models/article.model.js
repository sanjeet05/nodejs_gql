const mongoose = require('mongoose');

/**
 * Article Schema
 * @public
 */
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  }, 
  body: {
    type: String,
    required: true,
    trim: true,
  },  
}, {
  timestamps: true,
});


/**
 * @typedef Article
 */
module.exports = mongoose.model('Article', articleSchema);
