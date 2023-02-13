function signIn() {
    var emailidValue = document.getElementById("emailid").value;
    var passwordValue = document.getElementById("password").value;
    var adminValue = document.getElementsByName("typeofuser")[0].checked;
    var customerValue  = document.getElementsByName("typeofuser")[1].checked;
    var typeofuserValue;
    if(adminValue){
        typeofuserValue="admin"
    }
    if(customerValue){
        typeofuserValue="customer"
  }
    var login = {emailid:emailidValue,password:passwordValue,typeofuser:typeofuserValue};
   //console.log(login);
    fetch("http://localhost:3000/api/login/signIn",{
        method:"post",
        body:JSON.stringify(login),
        headers:{
            "Content-type":"application/json"
        }
    }).then(res=>res.json()).then(result=>{
                //console.log(result);
        if(result.msg=="Admin login successfully"){
            window.location.href="http://127.0.0.1:5500/frontend/pharmalogin/adminPharma.html"
        }else if(result.msg=="customer login successfully"){
            window.location.href="http://127.0.0.1:5500/frontend/pharmalogin/custPharma.html"
        } else {
            document.getElementById("msg").innerHTML=result.msg;

        }
    }).catch(error=>console.log(error));
    reset();
}
function signUp() {
    var fnameValue = document.getElementById("fname").value;
    var lnameValue = document.getElementById("lname").value;
    var mobnovalue = document.getElementById("mobno").value;
    var emailidValue = document.getElementById("emailid").value;
    var passwordValue = document.getElementById("password").value;
    var adminValue = document.getElementsByName("typeofuser")[0].checked;
    var customerValue  = document.getElementsByName("typeofuser")[1].checked;
    var typeofuserValue;
    if(adminValue){
        typeofuserValue="admin"
    }
    if(customerValue){
        typeofuserValue="customer"

    }
    
    var login = {fname:fnameValue,lname:lnameValue,mobno:mobnovalue
        ,emailid:emailidValue,password:passwordValue,typeofuser:typeofuserValue};
   console.log(login);
    fetch("http://localhost:3000/api/login/signUp",{
        method:"post",
        body:JSON.stringify(login),
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
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("mobno").value="";

    document.getElementById("emailid").value="";
    document.getElementById("password").value="";
}


