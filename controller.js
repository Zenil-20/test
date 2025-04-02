const Book = require("./model");

exports.getbooks = async(req,res)=>{
  try{
      const books=await Book.find();
      return res.status(200).json({
        success: true,
        data: books
      });
  }
  catch(err){
      console.log("error occured",err);
      return res.status(500).json({
        success:false,
        message: "internal server error occured"
      });
  }
}




exports.createbooks = async(req,res)=>{
  try{
      const {name,description} = req.body;

      if(!name || !description){
        return res.status(400).json({
          success:false,
          message:"Book name and decription is required"
        });
      }

      const newbooks = await Book.create({name,description});
      return res.status(200).json({
        success: true,
        data: newbooks
      });
  }
  catch(err){
      console.log("error occured creating new books",err);
      return res.status(500).json({
        success:false,
        message: "internal server error occured"
      });
  }
}
