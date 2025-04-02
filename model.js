const mongoose=require('mongoose');

const bookschema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  description : {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("books",bookschema);