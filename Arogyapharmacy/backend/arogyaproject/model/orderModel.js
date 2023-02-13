let mongoose=require("mongoose");
mongoose.pluralize(null);
let orderCollectionSchema = mongoose.Schema({
    od_id:{type: Number,
        required:[true,"order id is required"]
    },
    cust_id:{type: Number,
        required:[true,"customer id is required"]
    },
    c_id:{type: Number,
        required:[true,"category id is required"]
    },
    p_id:{type: Number,
        required:[true,"Product id is required"]
    },
   
    p_name:{
        type:String,
        required:[true,"Product Name is required"]
      
    },
    p_qty:{
        type:String,
        required:[true,"quantity is required"]
    },
    p_price:{
        type:String,
        required:[true,"amount is required"]
      
    },
    date_id:{
        type:Date,
        required:[true,"Date is required"]
    }


    
})

let orderCollectionModal=mongoose.model("OrderCollection",orderCollectionSchema);
module.exports=orderCollectionModal;