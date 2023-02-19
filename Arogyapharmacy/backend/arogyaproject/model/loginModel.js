let mongoose=require("mongoose");
mongoose.pluralize(null);
let pharmacyLoginSchema = mongoose.Schema({
    _id:Number,

    // fname:{
    //     type:String,
    //     required:[true,"first name is required"]
    // },
    // lname:{
    //     type:String,
    //     required:[true,"last name is required"]
    // },
    // mobno:{
    //     type:Number,
    //     required:[true,"mobile number is required"]
    // },

    emailid:{
        type:String,
        required:[true,"emailid is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    typeofuser:{
        type:String,
        required:[true,"typeof user must  be required"]
    }


})

let loginModel=mongoose.model("PharmaLogin",pharmacyLoginSchema);
module.exports=loginModel;