
async function viewAllCategoriesDisease(){
    try{ 

    let result = document.getElementById("result");
    let respnose = await fetch("http://localhost:3000/api/diseasecat/findAllDisease",{
    method:"get",
    headers:{
        "Content-type":"application/json",
        "authorization":localStorage.getItem("token")
    }
    
 } );
    let data = await respnose.json();
    
   
    result.innerHTML = data.map(obj=>"<li>CategoryId "+obj._id+"CategoryName "+obj.DiseaseName+
    "CategoryImage "+obj.DiseaseImage+"</li>").join("<br/>");
    console.log(data);   
}catch(ex){
    alert(ex);
} 
  
}







async function viewAllMedicineProduct(){
    let result = document.getElementById("result");
    let respnose = await  fetch("http://localhost:3000/api/medicineproduct/findAllMedicineProducts");
    let data = await respnose.json();
    result.innerHTML = data.map(obj=>"<li>Medicine Id "+obj._id+"Medicine Name "+obj.medicineName+
    "Medicine Quantity "+obj.medicineQuantity+ "Medicine Price "+obj.medicinePrice+
    "Medicine Image"+obj.medicineImage+"</li>").join("<br/>");
    console.log(data);   


}

function logout() {
    localStorage.removeItem("token");

    window.location.href="http://127.0.0.1:5500/frontend/pharmalogin/index.html"   
}





