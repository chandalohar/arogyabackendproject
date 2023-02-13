let MedcproductModal = require("../model/MedcproductModal");
//
let storeMedicineProduct = async (request,response)=> {
    let medicineProduct = request.body;
    //console.log(diseaseCategory);
    //response.send("done");
    try{
    let result  = await MedcproductModal.insertMany(medicineProduct);
    if(result!=null){
        response.send({"msg":"Records stored successfully"});
    }
    else{"please enter Values"}
    //response.send(result);
    }catch(ex){
        response.send(ex);
    }
}
//
let findAllMedicineProducts = async(request,response)=> {
    try {
        let result = await MedcproductModal.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}
//
let findMedicineProductById = async (reqeust,response)=> {
    try {
        let _id = reqeust.params._id;
        let result = await MedcproductModal.find({_id:_id});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}
//
let findMedicineProductByName = async (reqeust,response)=> {
    try {
        let medicineName = reqeust.params.medicineName;
        let result = await MedcproductModal.find({medicineName:medicineName});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}





//
module.exports = {storeMedicineProduct,findAllMedicineProducts,findMedicineProductById,findMedicineProductByName};


