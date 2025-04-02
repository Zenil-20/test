const express = require('express');
const bookRoutes = require('./bookRoutes');
const app=express();
const mongoose=require('mongoose');

app.use(express.json());
app.use("/api",bookRoutes);


  mongoose.connect("mongodb+srv://zenil:zenil123@cluster0.wrhavro.mongodb.net/test?retryWrites=true&w=majority",)
  .then(() => console.log("Connected to MongoDB successfully ✅"))
  .catch(err => console.error("MongoDB Connection Error ❌:", err));



app.listen(3000,()=>{
  console.log('Server is running on port 3000');
})