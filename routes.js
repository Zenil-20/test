const express = require("express");
const router = express.Router();
const { getbooks, createbooks}=require("./controller")

router.get("/book", getbooks);
router.post("/book", createbooks );

module.exports=router;