//

let express=require("express");
let router = express.Router();
let orderController=require("../controller/orderController");

//http://localhost:3000/api/ordercollection/storeOrderCollection
router.post("/storeOrderCollection"  ,orderController.storeOrderCollection);



module.exports=router;