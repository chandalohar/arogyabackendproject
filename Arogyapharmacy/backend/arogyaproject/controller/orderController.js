let orderCollectionModal = require("../model/orderModel");
let storeOrderCollection = async (request,response)=> {
    let orderCollection = request.body;
    //console.log(orderCollection);
    //response.send("done");
    try{
    let result  = await orderCollectionModal.insertMany(orderCollection);
    if(result!=null){
        response.send({"msg":"Record stored successfully"});
    }
    
    //response.send(result);
    }catch(error){
        response.send(error);
    }
}
// 
module.exports = {storeOrderCollection};