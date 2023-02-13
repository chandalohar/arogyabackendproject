let express=require("express");
let router = express.Router();
let loginController=require("../controller/loginController");

//http://localhost:3000/api/login/signIn
router.post("/signIn",loginController.signIn);

//http://localhost:3000/api/login/signUp
router.post("/signUp",loginController.signUp);



module.exports=router;