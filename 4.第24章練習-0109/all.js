function aprice(cake1){
    var el =document.getElementById("t1");
    el.textContent=cake1;
}
aprice(100)

function bprice(cake1,cake2){
    var el = document.querySelector("#t2");
    var el2 = document.querySelector("#t3");
    var el3 = document.querySelector("#t5");
    el.textContent=cake1;
    el2.textContent=cake2;
    el3.textContent=cake1+cake2;
}
bprice(100,200);