
//
async function searchByOrderId(){
    let _id = document.getElementById("order_id").value;
    let result = document.getElementById("orderbyid");
    let respnose = await fetch("http://localhost:3000/api/ordercollection/findcustomerorderById/"+_id);
    let data = await respnose.json();
    if(data.length==0){
        result.innerHTML="Not Present this type of order id == "+_id;
    }else {
        result.innerHTML = data.map(obj=>"order ID =="+obj.od_id+"customer id== "+obj.cust_id
        +"Category id =="+obj.c_id+",product id== "+obj.p_id +"Product Name =="+obj.p_name 
        +"product Quantity=="+obj.p_qty +"product price =="+obj.p_price
        +"order date=="+obj.date_id).join("<br/>");  
    }

    console.log(data);
    
}
//



