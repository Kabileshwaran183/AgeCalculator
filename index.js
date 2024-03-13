const btn1 = document.getElementById("btn");
const bdate=document.getElementById("birthday");
const res=document.getElementById("result");

function calculateAge(){
    const bdateval = bdate.value;
    if(bdateval==''){
        alert("Please Enter your Birthday Date!")
    }
    else{
    const age = getAge(bdateval)
    res.innerText=`Your are ${age} ${age==1?'year':'years'} old`;
}
}
function getAge(bd){
    const currentDate=new Date();
    const birthDay= new Date(bd);
    let age = currentDate.getFullYear()-birthDay.getFullYear();
    const month = currentDate.getMonth()-birthDay.getMonth();
    if(month < 0 || (month === 0 && currentDate.getDate()<birthDay.getDate())) {
        age--
    } 
     return age;
    
}


btn1.addEventListener("click",calculateAge)



