let mongoose = require("mongoose");
let passwordHashConfig = require("./passwordHashConfig");
let loginModel = require("../model/loginModel");
let url = "mongodb://127.0.0.1:27017/arogya";
mongoose.set('strictQuery',false);
let dbConnection=mongoose.connect(url).then(res=>console.log("db is being connected")).
catch(error=>console.log("error generated"));


//token Authentication
let adminAccount = async function() {
    let password = "admin@123";
    let hashPassword = await passwordHashConfig.convertPasswordInHash(password)
    let admin ={"emailid":"admin@gmail.com","password":hashPassword,"typeofuser":"admin"};
    let result = await loginModel.findOne({"emailid":admin.emailid});
    
    if(result==null){
            loginModel.insertMany(admin);
            console.log("admin account created")
    }else {
            console.log("admin account exits");
    }

}


module.exports={dbConnection,adminAccount};