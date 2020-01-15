// 陣列
const farmer=["ro","yo","to","wo","wo","op"] 

//取得第六個陣列的值&印出
const a = farmer[5];
console.log(a);

// 修改第六個的值＆印出
farmer[5]="so",
console.log(farmer);
// 給陣列新增值
farmer.push("io");
console.log(farmer);
// 取得陣列長度＆印出
const length = farmer.length;
console.log(length);
//物件
const farm ={
    farmer:["ya","do","wo","xo"],
    horses:250,
    dogs:2,
    newhorses:function(horses){
        const el=document.querySelector("#newhorses");
        el.textContent=`擴大事業版圖，馬另外增加${horses}`;
    }
}
//取得物件內farmer第一個值＆印出
const firstFarm =farm.farmer;
console.log(firstFarm);
//給物件內farmer新增一個值
farm.ducks = 200;
console.log(farm);
//取得物件horses的值＆印出
const er= farm.horses;
console.log(er);
//增加串模版"擴大事業版圖，馬增加到....."＆放在id=horses
const text=`擴大事業版圖，馬增加到${farm.horses}`;
const el =document.querySelector("#horses");
el.textContent = text;
//物件裡面放function,呼叫＆放在id=horses
farm.newhorses(farm.horses);

//陣列＋物件＋陣列＋函式
const house = [
    {
        street:6,
        roommate: ["jo","do"],
        gowalk:function(walk){
            const time = walk*2;
            return time;
        }
    },{
        street:5,
        roommate: ["wo","yo"],
        gowalk:function(walk){
            const time = walk*2;
            return time;
        }
    }
]
//呼叫函式
const el5 = document.querySelector("#walk");
el5.textContent = `${house[1].gowalk(house[1].street)}分`;


