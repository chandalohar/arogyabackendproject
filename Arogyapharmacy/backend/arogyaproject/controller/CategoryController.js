let CategorytModal = require("../model/CategoryModel");
//
let storeCategoryMOdel = async (request,response)=> {
    let Categories = request.body;
    //console.log(diseaseCategory);
    //response.send("done");
    try{
    let result  = await MedcproductModal.CategorytModal(Categories);
    if(result!=null){
        response.send({"msg":"Records stored successfully"});
    }
    else{"please enter Values"}
    //response.send(result);
    }catch(ex){
        response.send(ex);
    }
}


module.exports = {storeCategoryMOdel};
