const humberprice= 80;
const drinkprice =20;

document.getElementById("button1").onclick=function alltotal(){
    const humbernumber = parseInt(document.getElementById("food").value);
    const humbertotal = humbernumber*humberprice;
    const drinknumber =parseInt(document.getElementById("drink").value);
    const drinktotal = drinknumber*drinkprice;
    const el=document.getElementById("total");
    el.textContent=drinktotal+humbertotal
}
