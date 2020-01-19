const anumber = 5;
const bnumber = 5;
const atake = function(gift){
    const el =document.querySelector("#numberA");
    el.textContent = gift;
}
switch (anumber){
    case 10:
        atake("dog");
        break;
    case 5:
        atake("food");
        break;
    case 15: 
        btake("sosogift");
        break;
    default:
        atake("give you one opportunity");
        break;    
};
const btake = function(gift){
    const el2 =document.querySelector("#numberB");
    el2.textContent = gift;
};
switch(bnumber){
    case 5:
        btake("goodgift");
        break;
    case 10:
        btake("sosogift");
        break;
    case 15: 
        btake("sosogift");
        break;
    default:
        btake("give you one opportunity");
        break;
}