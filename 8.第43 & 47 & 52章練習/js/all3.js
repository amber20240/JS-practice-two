const girlhungry = 3;
const boyhungry = 8;
const girlorder = function(eat){
    const el =document.querySelector("#orderAId");
    el.textContent = eat;
};
if(girlhungry > 5){
    girlorder("chick")
}else if(girlhungry == 5){
    girlorder("fish")
}else{
    girlorder("salad")
}

const boyorder = function(eat){
    const el2 =document.querySelector("#checkSetId");
    el2.textContent = eat;
};
if(boyhungry > 5){
    boyorder("Aset")
}else if(boyhungry == 5){
    boyorder("Bset")
}else{
    boyorder("salad")
}