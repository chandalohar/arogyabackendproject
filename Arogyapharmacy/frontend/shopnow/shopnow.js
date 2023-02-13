function productaddtocart(){
    var od_id = document.getElementById("od_id").value;
    var cust_id = document.getElementById("cust_id").value;
    var c_id = document.getElementById("c_id").value;
    var p_id = document.getElementById("p_id").value;
    var p_name = document.getElementById("p_name").value;
    var p_qty = document.getElementById("p_qty").value;
    var p_price = document.getElementById("p_price").value;
    var date_id = document.getElementById("date_id").value;

    

    
    var orderCollection = {od_id:od_id,cust_id:cust_id,c_id:c_id
        ,p_id:p_id,p_name:p_name,p_qty:p_qty,p_price:p_price,date_id:date_id};
   console.log(orderCollection);
    fetch("http://localhost:3000/api/ordercollection/storeOrderCollection",{
        method:"post",
        body:JSON.stringify(orderCollection),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json()).then(result=>{
        document.getElementById("msg").innerHTML=result.msg;
        console.log(result);    
    }).catch(error=>console.log(error));
    reset();
}
//






function reset() {
 document.getElementById("od_id").value="";
document.getElementById("cust_id").value="";
document.getElementById("c_id").value="";
 document.getElementById("p_id").value="";
 document.getElementById("p_name").value="";
 document.getElementById("p_qty").value="";
 document.getElementById("p_price").value="";
document.getElementById("date_id").value="";


   
}


