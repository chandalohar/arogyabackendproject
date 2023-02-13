let diseaseCategoryModal = require("../model/diseaseCategoryModal");
let storeDiseaseCategory = async (request,response)=> {
    let diseaseCategory = request.body;
    //console.log(diseaseCategory);
    //response.send("done");
    try{
    let result  = await diseaseCategoryModal.insertMany(diseaseCategory);
    if(result!=null){
        response.send({"msg":"Record stored successfully"});
    }
    
    //response.send(result);
    }catch(error){
        response.send(error);
    }
}
// 
let findAllDisease = async(request,response)=> {
    try {
        let result = await diseaseCategoryModal.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}

//
//
let findDiseaseCategoryById = async (reqeust,response)=> {
    try {
        let _id = reqeust.params._id;
        let result = await diseaseCategoryModal.find({_id:_id});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}
//
let findDiseaseCategoryByName = async (reqeust,response)=> {
    try {
        let DiseaseName = reqeust.params.DiseaseName;
        let result = await diseaseCategoryModal.find({DiseaseName:DiseaseName});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}
//
module.exports = {storeDiseaseCategory,findAllDisease,findDiseaseCategoryById,findDiseaseCategoryByName};
