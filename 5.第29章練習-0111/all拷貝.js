const humberprice= 80;
const drinkprice =20;
const humbertotal = document.getElementById("food").value;
const foodprice=humberprice*parseInt(humbertotal);

document.getElementById("button1").onclick=function alltotal(){
    const humbernumber = document.getElementById("food").value;
    const humbertotal = humbernumber*humberprice;
    const drinknumber =document.getElementById("drink").value;
    const drinktotal = drinknumber*drinkprice;
    const el=document.getElementById("total");
    el.textContent=drinktotal+humbertotal
}
