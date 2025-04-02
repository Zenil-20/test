const mongoose= require("mongoose");

const booksschema = mongoose.Schema({
  name: {
    type:String,
    reuired:true
  }
})
module.exports= booksschema;