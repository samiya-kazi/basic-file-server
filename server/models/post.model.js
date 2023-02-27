const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  fileNames: {
    type: [String],
    required: true,
    default: []
  }
})

const Post = model('Post', postSchema);

module.exports = Post;