const vip = false;
const money = 1250;
const checkvip = vip == true;
const checkmoney = money >1000;
const checkdouble = checkvip & checkmoney;
const dbcheck =function(check1){
    const el=document.getElementById("checkAndId");
    el.textContent = check1;
}
if (vip == true & money >1000){
    dbcheck(true)
}else if(vip == true || money >1000){
    dbcheck(false)
}else{
    dbcheck(false)
}
const checkdoubletrue = function(check2){
    const el2 = document.querySelector("#checkOrId");
    el2.textContent = check2;
}
if(checkvip || checkmoney){
    checkdoubletrue(true);
}else if(checkvip & checkmoney){
    checkdoubletrue(true)
}else{
    checkdoubletrue(false)  
}
