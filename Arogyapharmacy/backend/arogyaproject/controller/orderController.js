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
let findAllOrders = async(request,response)=> {
    try {
        let result = await orderCollectionModal.find({});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}
//
let findcustomerorderById = async (reqeust,response)=> {
    try {
        let od_id = reqeust.params.od_id;
        let result = await orderCollectionModal.find({od_id:od_id});
        response.json(result);
    } catch (error) {
        response.json(error);
    }
}
//
module.exports = {storeOrderCollection,findAllOrders,findcustomerorderById};