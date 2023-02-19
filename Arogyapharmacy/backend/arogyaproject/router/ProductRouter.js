//app.use("/api/product",productRouter);

let express = require("express");
let router = express.Router();
let productController = require("../controller/ProductController");


//http://localhost:3000/api/product/
//router.post("/",productController.);


module.exports=router;