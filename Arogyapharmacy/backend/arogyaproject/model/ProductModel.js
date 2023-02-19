
let mongoose=require("mongoose");
mongoose.pluralize(null);


const productSchema = new Schema({
    _id:       { type: Number, required: true },
    pname:           { type: String, required: true},
    price:          { type: Number, required: true, min: 0 },
    categories:     [{ type: mongoose.Types.ObjectId, ref: 'Category' }],
});

let ProductModal=mongoose.model("Product",productSchema);

module.exports=ProductModal;