//////////Login Form //////////////////////////////////////
function logintranspert() {
    document.getElementById('submit1').style.display="none";
    document.getElementById("subdiv1").style.display="block";
}

LoginForm.addEventListener("submit",CheckFun);
function CheckFun(event){
    event.preventDefault();
    let loginEmail= event.target.loginEmail.value;
    console.log(typeof(loginEmail));
    
    let loginPass= event.target.loginPass.value;
    let storageData=JSON.parse(localStorage.getItem("UsersData"));
    console.log(storageData);

    for(let i=1; i<storageData.length;){
        console.log(storageData[i]);

        if(loginEmail == ""){
            alert("please enter an email");
            break;
        }

        if(storageData[i] === loginEmail ){

        if(storageData[i+1] === loginPass){
            logintranspert();
            localStorage.setItem('name',(storageData[i-1]));
            console.log(storageData[i-1]);
            break;
        }
        else{
            alert("The password is wrong");
            break;
        } }  
        else {
        
        if(i ===storageData.length-2){
            alert("the email is wrong");
        }
        i=i+3;
        continue;
        }
        }}

