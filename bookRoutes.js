const express=require("express");
const router=express.Router();

const {getbooks,createbooks} = require("./controller");

router.get("/books",getbooks);
router.post("/books",createbooks);

module.exports=router;