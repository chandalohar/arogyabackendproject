function productMedicine(){
    var _id = document.getElementById("_id").value;
    var medicineName = document.getElementById("medicineName").value;
    var medicineQuantity = document.getElementById("medicineQuantity").value;
    var medicinePrice = document.getElementById("medicinePrice").value;
    var medicineImage = document.getElementById("medicineImage").value;

    

    
    var productOfMedicine = {_id:_id,medicineName:medicineName,medicineQuantity:medicineQuantity
        ,medicinePrice:medicinePrice,medicineImage:medicineImage};
   console.log(productOfMedicine);
    fetch("http://localhost:3000/api/medicineproduct/storeMedicineProduct",{
        method:"post",
        body:JSON.stringify(productOfMedicine),
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
    document.getElementById("_id").value="";
    document.getElementById("medicineName").value="";
    document.getElementById("medicineQuantity").value="";
    document.getElementById("medicinePrice").value="";
    document.getElementById("medicineImage").value="";

   
}


