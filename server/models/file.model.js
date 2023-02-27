const { model, Schema } = require('mongoose');

const fileSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
})

const File = model('File', fileSchema);

module.exports = File;