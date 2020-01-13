const total=function (humber,drink){
    const humbertotal = humber*60;
    const drinktotal = drink*20;
    const two = humbertotal+drinktotal;
    return two;
}
const price = total(5,10);
const el= document.getElementById("text1");
el.textContent = price;