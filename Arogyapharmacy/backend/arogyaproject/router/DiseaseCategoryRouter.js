let express = require("express");
let router = express.Router();
let diseaseController = require("../controller/DiseaseCategoryController");


//http://localhost:3000/api/diseasecat/storeDiseaseCategory

router.post("/storeDiseaseCategory",diseaseController.storeDiseaseCategory);
//http://localhost:3000/api/diseasecat/findAllDisease
router.get("/findAllDisease",diseaseController.findAllDisease);
//http://localhost:3000/api/diseasecat/findDiseaseCategoryById/
router.get("/findDiseaseCategoryById/:_id",diseaseController.findDiseaseCategoryById);

//http://localhost:3000/api/diseasecat/findDiseaseCategoryByName/
router.get("/findDiseaseCategoryByName/:DiseaseName",diseaseController.findDiseaseCategoryByName);



module.exports=router;