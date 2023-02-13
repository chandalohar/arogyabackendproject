let express=require("express");
let router = express.Router();
let MedcProductController=require("../controller/MedcProductController");

//http://localhost:3000/api/medicineproduct/storeMedicineProduct
router.post("/storeMedicineProduct",MedcProductController.storeMedicineProduct);

//http://localhost:3000/api/medicineproduct/findAllMedicineProducts
router.get("/findAllMedicineProducts",MedcProductController.findAllMedicineProducts);

//http://localhost:3000/api/medicineproduct/findMedicineProductById/
router.get("/findMedicineProductById/:_id"   ,MedcProductController.findMedicineProductById);
//http://localhost:3000/api/medicineproduct/findMedicineProductByName/
router.get("/findMedicineProductByName/:medicineName"  ,MedcProductController.findMedicineProductByName);



module.exports=router;



