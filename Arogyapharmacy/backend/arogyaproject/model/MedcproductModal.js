let mongoose=require("mongoose");
mongoose.pluralize(null);
let pharmaProductSchema = mongoose.Schema({
    _id:{type: Number,
        required:[true,"Product Id is required"]
    },

    medicineName:{ type:String  ,
   required:[true,"medicineName is required"] 
    },
  
    medicineQuantity:{type:Number,
        required:[true," medicineQuantity is required"] 
     },
    medicinePrice:{type:Number, 
        required:[true," medicinePrice is required"] },

    medicineImage:{
        type:String, 
            required:[true,"Image url is required"] }
    

    })


let MedcproductModel=mongoose.model("pharmaProductMedicine",pharmaProductSchema);
module.exports=MedcproductModel;