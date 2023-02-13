//http://localhost:3000/api/diseasecat/findDiseaseCategoryByName/
//http://localhost:3000/api/diseasecat/findDiseaseCategoryById/
async function searchDiseaseCategoryByName(){
    let DiseaseName = document.getElementById("DiseaseName").value;
    let result = document.getElementById("resultbyname");
    let respnose = await fetch("http://localhost:3000/api/diseasecat/findDiseaseCategoryByName/"+DiseaseName);
    let data = await respnose.json();
    if(data.length==0){
        result.innerHTML="Not Present this type of Disease Category "+DiseaseName;
    }else {
        result.innerHTML = data.map(obj=>"Disease Id =="+obj._id+"Disease Category Name== "+obj.DiseaseName).join("<br/>");  
    }

    console.log(data);
    
}

async function searchDiseaseCategoryById(){
    let _id = document.getElementById("_id").value;
    let result = document.getElementById("resultbyid");
    let respnose = await fetch("http://localhost:3000/api/diseasecat/findDiseaseCategoryById/"+_id);
    let data = await respnose.json();
    if(data.length==0){
        result.innerHTML="Not Present this type of Disease Category "+_id;
    }else {
        result.innerHTML = data.map(obj=>"Disease Id == "+obj._id+"Disease Category Name == "+obj.DiseaseName).join("<br/>");  
    }

    console.log(data);
   
}
//

async function searchProductMedicineByName(){
    let medicineName = document.getElementById("medicineName").value;
    let result = document.getElementById("resultbymediname");
    let respnose = await fetch("http://localhost:3000/api/medicineproduct/findMedicineProductByName/"+medicineName);
    let data = await respnose.json();
    if(data.length==0){
        result.innerHTML="Not Present this type of medicine product== "+medicineName;
    }else {
        result.innerHTML = data.map(obj=>"medicine Id =="+obj._id+"medicine product Name== "+obj.medicineName).join("<br/>");  
    }

    console.log(data);
    
}


//
async function searchProductMedicineById(){
    let _id = document.getElementById("m_id").value;
    let result = document.getElementById("resultbymediid");
    let respnose = await fetch("http://localhost:3000/api/medicineproduct/findMedicineProductById/"+_id);
    let data = await respnose.json();
    if(data.length==0){
        result.innerHTML="Not Present this type of medicine product ID == "+_id;
    }else {
        result.innerHTML = data.map(obj=>"medicine Id =="+obj._id+",medicine product Name== "+obj.medicineName
        +",medicine Quantity =="+obj.medicineQuantity+",medicine Price== "+obj.medicinePrice).join("<br/>");  
    }

    console.log(data);
    
}














