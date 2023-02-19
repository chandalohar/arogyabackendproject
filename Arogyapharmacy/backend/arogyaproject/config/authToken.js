let jwt = require("jsonwebtoken");
exports.verifyUserToken = (request,response,next)=> {
    try{
    let token = request.headers.authorization;
    if(token==undefined){
        response.json({
            "msg":"Unathorized request or user"
        })
    }else {
        let verifyToken = jwt.verify(token,"secretKey");
        console.log(verifyToken.typeofuser);
        request.typeofuser= verifyToken.typeofuser;     // set the type of user in request object.

        next();
    }
}catch(ex){
    response.json({
        "msg":"Invalid token "+ex
    })
}   

}
// typeof is customer or admin
exports.isCustomerOrAdmin = (request,response,next)=> {
    try{
         console.log(request.typeofuser+" "+request.path);
         if(request.typeofuser=="admin" && (request.path=="/findAllDisease" ||  request.path=="/storeDiseaseCategory") ){
            console.log("admin condition")
            next();
         }else if(request.typeofuser=="customer" && request.path=="/findAllDisease"){
            console.log("customer condition")
            next();
         }else {
            response.json({
                "msg":"You are unauthorized person or don't have role to access that resource"
            })
         }
            
    }catch(ex){
        response.json({
            "msg":"wrong user"+ex
        })
    }
}

