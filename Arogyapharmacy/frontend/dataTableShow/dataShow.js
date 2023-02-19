// load disease categories
async function loadDiseaseCategorywithImage() {
    try{ 
    let res = await fetch("http://localhost:3000/api/diseasecat/findAllDisease",{
        method:"get",
    headers:{
        "Content-type":"application/json",
        "authorization":localStorage.getItem("token")
    }
    });


    let data = await res.json();
    console.log(data);
    var tableTag = document.createElement("table"); 
    tableTag.setAttribute("border","2");  
    tableTag.setAttribute("class","table table-striped mt-10");
    
    var firstRow = document.createElement("tr");
   
    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("ID");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("Disease Name");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);

    var firstRowThirdColumn = document.createElement("th");
    var firstRowThirdColumnValue = document.createTextNode("Disease Image");
    firstRowThirdColumn.appendChild(firstRowThirdColumnValue);

    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);
    firstRow.appendChild(firstRowThirdColumn);

    tableTag.appendChild(firstRow);

    for(i=0;i<data.length;i++){
    var secondRow = document.createElement("tr");
   
   


    var secondRowFirstColumn = document.createElement("td");


    var secondRowFirstColumnValue = document.createTextNode(data[i]._id);
    secondRowFirstColumn.appendChild(secondRowFirstColumnValue);

    var secondRowSecondColumn = document.createElement("td");
    var secondRowSecondColumnValue = document.createTextNode(data[i].DiseaseName);
    secondRowSecondColumn.appendChild(secondRowSecondColumnValue);


    var secondRowThirdColumn = document.createElement("td");
    //
    var imageTagValue = document.createElement("img");
    imageTagValue.setAttribute("src",data[i].DiseaseImage);
    imageTagValue.setAttribute("width","200px");
    imageTagValue.setAttribute("height","200px");
    secondRowThirdColumn.setAttribute("class","myImageData");   

    //myImageData

    secondRowThirdColumn.appendChild(imageTagValue);
   



    secondRow.appendChild(secondRowFirstColumn);
    secondRow.appendChild(secondRowSecondColumn);
    secondRow.appendChild(secondRowThirdColumn);


    tableTag.appendChild(secondRow);
    }
    document.getElementsByTagName("body")[0].appendChild(tableTag);
}catch(ex){
    alert(ex);
}



}
// load medicine products
async function loadMediciProductImage() {
    let res = await fetch("http://localhost:3000/api/medicineproduct/findAllMedicineProducts");
    let data = await res.json();
    console.log(data);
    var tableTag = document.createElement("table"); 
    tableTag.setAttribute("border","2");  
    tableTag.setAttribute("class","table table-striped mt-10");
    
    var firstRow = document.createElement("tr");
   
    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("ID");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("Disease Name");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);

    var firstRowThirdColumn = document.createElement("th");
    var firstRowThirdColumnValue = document.createTextNode("Disease Description");
    firstRowThirdColumn.appendChild(firstRowThirdColumnValue);

    var firstRowFourthColumn = document.createElement("th");
    var firstRowFourthColumnValue = document.createTextNode("Disease Price");
    firstRowFourthColumn.appendChild(firstRowFourthColumnValue);

    var firstRowFifthColumn = document.createElement("th");
    var firstRowFifthColumnValue = document.createTextNode("Disease Image");
    firstRowFifthColumn.appendChild(firstRowFifthColumnValue);


    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);
    firstRow.appendChild(firstRowThirdColumn);
    firstRow.appendChild(firstRowFourthColumn);
    firstRow.appendChild(firstRowFifthColumn);



    tableTag.appendChild(firstRow);

    for(i=0;i<data.length;i++){
    var secondRow = document.createElement("tr");
   
   


    var secondRowFirstColumn = document.createElement("td");
    var secondRowFirstColumnValue = document.createTextNode(data[i]._id);
    secondRowFirstColumn.appendChild(secondRowFirstColumnValue);

    var secondRowSecondColumn = document.createElement("td");
    var secondRowSecondColumnValue = document.createTextNode(data[i].medicineName);
    secondRowSecondColumn.appendChild(secondRowSecondColumnValue);


    var medicineQuantityColumn = document.createElement("td");
    var medicineQuantityColumnValue = document.createTextNode(data[i].medicineQuantity);
    medicineQuantityColumn.appendChild(medicineQuantityColumnValue);


    var medicinePriceColumn = document.createElement("td");
    var medicinePriceColumnValue = document.createTextNode(data[i].medicinePrice);
    medicinePriceColumn.appendChild(medicinePriceColumnValue);


    var secondRowImageColumn = document.createElement("td");
    var imageTagValue = document.createElement("img");
    imageTagValue.setAttribute("src",data[i].medicineImage);
    imageTagValue.setAttribute("width","150px");
    imageTagValue.setAttribute("height","150px");
    secondRowImageColumn.setAttribute("class","myImageData");   



    secondRowImageColumn.appendChild(imageTagValue);
   



    secondRow.appendChild(secondRowFirstColumn);
    secondRow.appendChild(secondRowSecondColumn);
    secondRow.appendChild(medicineQuantityColumn);
    secondRow.appendChild(medicinePriceColumn);
    secondRow.appendChild(secondRowImageColumn);


    tableTag.appendChild(secondRow);
    }
    document.getElementsByTagName("body")[0].appendChild(tableTag);
    
}


//




// view all customer orders
async function viewAllCustOrders() {
    let res = await fetch("http://localhost:3000/api/ordercollection/findAllOrders");
    let data = await res.json();
    console.log(data);
    var tableTag = document.createElement("table"); 
    tableTag.setAttribute("border","2");  
    tableTag.setAttribute("class","table table-striped");
    
    var firstRow = document.createElement("tr");
   
    var firstRowFirstColumn = document.createElement("th");
    var firstRowFirstColumnValue = document.createTextNode("ORDER ID");
    firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

    var firstRowSecondColumn = document.createElement("th");
    var firstRowSecondColumnValue = document.createTextNode("CUSTOMER ID");
    firstRowSecondColumn.appendChild(firstRowSecondColumnValue);

    var firstRowThirdColumn = document.createElement("th");
    var firstRowThirdColumnValue = document.createTextNode("CATEGORY ID");
    firstRowThirdColumn.appendChild(firstRowThirdColumnValue);

    var firstRowFourthColumn = document.createElement("th");
    var firstRowFourthColumnValue = document.createTextNode("PRODUCT ID");
    firstRowFourthColumn.appendChild(firstRowFourthColumnValue);

    var firstRowFifthColumn = document.createElement("th");
    var firstRowFifthColumnValue = document.createTextNode("PRODUCT NAME");
    firstRowFifthColumn.appendChild(firstRowFifthColumnValue);

    //
    var firstRow6Column = document.createElement("th");
    var firstRow6ColumnValue = document.createTextNode("PRODUCT QUANTITY");
    firstRow6Column.appendChild(firstRow6ColumnValue);
    // 
    var firstRow7Column = document.createElement("th");
    var firstRow7ColumnValue = document.createTextNode("PRODUCT AMOUNT");
    firstRow7Column.appendChild(firstRow7ColumnValue);
    //
    var firstRow8Column = document.createElement("th");
    var firstRow8ColumnValue = document.createTextNode("DATE OF ORDER");
    firstRow8Column.appendChild(firstRow8ColumnValue);


    firstRow.appendChild(firstRowFirstColumn);
    firstRow.appendChild(firstRowSecondColumn);
    firstRow.appendChild(firstRowThirdColumn);
    firstRow.appendChild(firstRowFourthColumn);
    firstRow.appendChild(firstRowFifthColumn);
    firstRow.appendChild(firstRow6Column); 
     firstRow.appendChild(firstRow7Column);
     firstRow.appendChild(firstRow8Column);


    tableTag.appendChild(firstRow);

    for(i=0;i<data.length;i++){
    var secondRow = document.createElement("tr");
   
   


    var secondRowFirstColumn = document.createElement("td");
    var secondRowFirstColumnValue = document.createTextNode(data[i].od_id);
    secondRowFirstColumn.appendChild(secondRowFirstColumnValue);

    var secondRowSecondColumn = document.createElement("td");
    var secondRowSecondColumnValue = document.createTextNode(data[i].cust_id);
    secondRowSecondColumn.appendChild(secondRowSecondColumnValue);


    var medicineQuantityColumn = document.createElement("td");
    var medicineQuantityColumnValue = document.createTextNode(data[i].c_id);
    medicineQuantityColumn.appendChild(medicineQuantityColumnValue);


    var medicinePriceColumn = document.createElement("td");
    var medicinePriceColumnValue = document.createTextNode(data[i].p_id);
    medicinePriceColumn.appendChild(medicinePriceColumnValue);




    var firstRowFifthColumn = document.createElement("td");
    var firstRowFifthColumnValue = document.createTextNode(data[i].p_name);
    firstRowFifthColumn.appendChild(firstRowFifthColumnValue);

    //
    var firstRow6Column = document.createElement("td");
    var firstRow6ColumnValue = document.createTextNode(data[i].p_qty);
    firstRow6Column.appendChild(firstRow6ColumnValue);
    // 
    var firstRow7Column = document.createElement("td");
    var firstRow7ColumnValue = document.createTextNode(data[i].p_price);
    firstRow7Column.appendChild(firstRow7ColumnValue);
    //
    var firstRow8Column = document.createElement("td");
    var firstRow8ColumnValue = document.createTextNode(data[i].date_id);
    firstRow8Column.appendChild(firstRow8ColumnValue);
   



    secondRow.appendChild(secondRowFirstColumn);
    secondRow.appendChild(secondRowSecondColumn);
    secondRow.appendChild(medicineQuantityColumn);
    secondRow.appendChild(medicinePriceColumn);
    //
    secondRow.appendChild(firstRowFifthColumn);
    secondRow.appendChild(firstRow6Column);
    secondRow.appendChild(firstRow7Column);
    secondRow.appendChild(firstRow8Column);



    tableTag.appendChild(secondRow);
    }
    document.getElementsByTagName("body")[0].appendChild(tableTag);
}
//


















































// async function LoadData(){
//     let res = await fetch("http://localhost:3000/api/diseasecat/findAllDisease");
//     let data = await res.json();
//     console.log(data);
// //
// var tableTag = document.createElement("table"); 
//     tableTag.setAttribute("border","1");  
//     tableTag.setAttribute("class","table table-primary");
    
//     var firstRow = document.createElement("tr");
    
//     var firstRowFirstColumn = document.createElement("th");
//     var firstRowFirstColumnValue = document.createTextNode("ID");
//     firstRowFirstColumn.appendChild(firstRowFirstColumnValue);

//     var firstRowSecondColumn = document.createElement("th");
//     var firstRowSecondColumnValue = document.createTextNode("Disease Name");
//     firstRowSecondColumn.appendChild(firstRowSecondColumnValue);

//     var firstRowThirdColumn = document.createElement("th");
//     var firstRowThirdColumnValue = document.createTextNode("Disease Image");
//     firstRowThirdColumn.appendChild(firstRowThirdColumnValue);

//     firstRow.appendChild(firstRowFirstColumn);
//     firstRow.appendChild(firstRowSecondColumn);
//     firstRow.appendChild(firstRowThirdColumn);

//     tableTag.appendChild(firstRow);


//     for(i=0;i<data.length;i++){
//         var divTag = document.createElement("div");
//         var imgTag = document.createElement("img");
//         var brTag = document.createElement("br")
//         var imageDetails = document.createElement("span");
//         var iamgeDetailsValue = document.createTextNode(+data[i]._id+data[i].DiseaseName);
//         imageDetails.appendChild(iamgeDetailsValue);

//         imgTag.setAttribute("src",data[i].DiseaseImage);
//         imgTag.setAttribute("width","100px");
//         imgTag.setAttribute("height","100px");
//         divTag.setAttribute("class","myImageData");

//         divTag.appendChild(imgTag);
//         divTag.appendChild(imageDetails);
//         divTag.appendChild(brTag);
//         divTag.appendChild(brTag);

//         document.getElementsByTagName("body")[0].appendChild(divTag);

//     }
//     document.getElementsByTagName("body")[0].appendChild(tableTag);

// }

