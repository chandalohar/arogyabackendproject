//

let express=require("express");
let router = express.Router();
let orderController=require("../controller/orderController");

//http://localhost:3000/api/ordercollection/storeOrderCollection
router.post("/storeOrderCollection"  ,orderController.storeOrderCollection);

//http://localhost:3000/api/ordercollection/findAllOrders
router.get("/findAllOrders"  ,orderController.findAllOrders);



//http://localhost:3000/api/ordercollection/findcustomerorderById/
router.get("/findcustomerorderById/:od_id"  ,orderController.findcustomerorderById);


module.exports=router;

