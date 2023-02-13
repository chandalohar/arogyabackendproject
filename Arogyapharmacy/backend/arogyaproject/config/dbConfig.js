let mongoose = require("mongoose");
let url = "mongodb://127.0.0.1:27017/arogya";
mongoose.set('strictQuery',false);
let dbConnection=mongoose.connect(url).then(res=>console.log("db is being connected")).
catch(error=>console.log("error generated"));

module.exports=dbConnection;