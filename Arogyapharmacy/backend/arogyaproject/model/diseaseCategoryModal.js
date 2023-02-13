let mongoose=require("mongoose");
mongoose.pluralize(null);
let dieasesCategorySchema = mongoose.Schema({
    _id:{type: Number,
        required:[true,"category id is required"]
    },
   
    DiseaseName:{
        type:String,
        required:[true,"DiseaseName is required"]
      
    },
    DiseaseImage:{
        type:String,
        required:[true,"DiseaseImage is required"]
    }


    
})

let diseaseCategoryModal=mongoose.model("DiseaseCategory",dieasesCategorySchema);
module.exports=diseaseCategoryModal;