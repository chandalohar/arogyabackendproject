function diseaseCategory(){
    var _id = document.getElementById("_id").value;
    var DiseaseName = document.getElementById("DiseaseName").value;
    var DiseaseImage = document.getElementById("DiseaseImage").value;


    
    var diseaseCategoryjs = {_id:_id,DiseaseName:DiseaseName,DiseaseImage:DiseaseImage};
   console.log(diseaseCategoryjs);
    fetch("http://localhost:3000/api/diseasecat/storeDiseaseCategory",{
        method:"post",
        body:JSON.stringify(diseaseCategoryjs),
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
    document.getElementById("DiseaseName").value="";
    document.getElementById("DiseaseImage").value="";

   
}


