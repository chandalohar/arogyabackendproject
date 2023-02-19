//app.use("/api/category",categoryRouter);
let express = require("express");
let router = express.Router();
let categoryController = require("../controller/CategoryController");


//http://localhost:3000/api/category/storeCategoryMOdel
//router.post("/storeCategoryMOdel",categoryController.storeCategoryMOdel);


module.exports=router;