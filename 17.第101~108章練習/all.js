// (一)
// 先監聽input,如果沒有focus則看有無內容
// 點擊btnLocalStorageSet判斷有無文字,有文字則把文字localStorage到e（中央行政中心）  - setItem(key,value)
// 點擊btnLocalStorageget判斷有無文字,有文字則把文字localStorage到e（中央行政中心）  - getItem(key)
// input value ( 如果是需要數字要 parseInt)/ ul li textContent
// JSON.stringify  JSON.parse   本題不用,因為input.value是字串,所以可以直接放入localStorage
const inputText = document.querySelector("#textInput");
inputText.addEventListener("blur", alertText, false);
function alertText(e) {
    if (e.target.value == "") {
        alert("請輸入文字")
    }
}
const btnLocalStorageSet = document.querySelector("#btnLocalStorageSet");
btnLocalStorageSet.addEventListener("click", btnLocalStorageSetItem, false);
function btnLocalStorageSetItem() {
    const str = inputText.value;
    localStorage.setItem("name", str);
}
const btnLocalStorageget = document.querySelector("#btnLocalStorageGet");
btnLocalStorageget.addEventListener("click", btnLocalStoragegetItem, false);
function btnLocalStoragegetItem() {
    const emText = document.querySelector("#emText");
    emText.textContent = localStorage.getItem("name");
}

// （二）
// 有兩個btn,一個是localStorage setItem / localStorageget getItem
// 用ul呈現,ul要設定屬性（ setAttribute ）
// localStorage.setItem要放入string,所以要經過JSON.stringify字串化
// 因為現在localStorage的內容是string 
// 所以在localStorage.getItem後要JSON.parse(解係)變成array 
// 如果是input就不會是array所以不用JSON.stringify / JSON.parse
// input的流程
// 拿到value / localStorage.setItem  儲存到 localStorage /  localStorage.getItem 得到 儲存在localStorage的內容
// farm array流程
// JSON.stringify 整個array(如farm) 字串化 / localStorage.setItem 儲存到 localStorage  /localStorage.getItem 拿到 儲存在localStorage的內容/JSON.parse 文字化

// 存進去就是要用 字串化  / 存進去後會變成  object /  領出來要用parse  變成 array
// 要把farm儲存到localStorage
// localStorage 要放stringify 
// 所以要把arry變成字串化 
// localStorage.setItem(key,value)
// 調出localStorage.getItem 現在會是string
// 透過 JSON.parse 變成array
// createElement document.createElement str放在裡面  textContent appendchild 

const farm = [{
    farmer: "good",
    hourse: 200
}, {
    farmer: "food",
    hourse: 350
}]

const farmLocalStorageSetItem = document.querySelector("#farmlocalStorageSetItem");
const farmLocalStorageGetItem = document.querySelector("#farmlocalStoragegetItem");
farmLocalStorageSetItem.addEventListener("click", farmLocalStorageSetItemu, false);
farmLocalStorageGetItem.addEventListener("click", farmLocalStorageSetItemt, false);
function farmLocalStorageSetItemu() {
    const farmStringify = JSON.stringify(farm);
    localStorage.setItem("farmContent", farmStringify);
};
function farmLocalStorageSetItemt() {
    console.log(localStorage.getItem("farmContent"));
    const farmContentString = localStorage.getItem("farmContent");
    const farmContentArray = JSON.parse(farmContentString);
    console.log(farmContentArray);
    const ul = document.querySelector(".two ul");
    ul.setAttribute("id", "twoId");
    // const twoLi = document.querySelector("#twoId");
    for (let i = 0; i < farmContentArray.length; i++) {
        const str = document.createElement("li");
        str.textContent = `農夫：${farmContentArray[i].farmer} ; 養的馬兒：${farmContentArray[i].hourse}`;
        ul.appendChild(str);
    }
};
// (三)
// 資料
// 事件
// 介面
// 先把farm 的原始資料印出在瀏覽器上（介面）; 可用呼叫 function執行動作
// createEelement document.createElement str textContent appendChild 放在function裡面
// 監聽點擊到ul範圍內的資料;再判斷點擊到的的是不是li;如果不是li則return;LI要大的
// 把資料呈現到介面
// 第一步先印出原始資料
const goodFarm = [{
    farmer: "good",
    dogs: 20
}, {
    farmer: "cool",
    dogs: 50
}, {
    farmer: "good",
    dogs: 20
}, {
    farmer: "wowo",
    dogs: 50
}]
const farmUl = document.querySelector("#ul");
function goodFarmOk() {
    for (let i = 0; i < goodFarm.length; i++) {
        let farmLi = document.createElement("li");
        let farmLiSetAttributeNum = farmLi.setAttribute("data-num", `${i}`);
        let farmLiSetAttributeDogs = farmLi.setAttribute("data-dogs", `${goodFarm[i].dogs}`)
        farmLi.textContent = `農場的名稱：${goodFarm[i].farmer}`;
        console.log(farmLi);
        farmUl.appendChild(farmLi);
    }
}
goodFarmOk()
// 第二部監聽點擊到的ul範圍
farmUl.addEventListener("click", clickFarmNumber, false);
function clickFarmNumber(e) {
    if (e.target.nodeName !== "LI") { return };
    const farmNumberContent = document.querySelector(".farmNumber");
    farmNumberContent.textContent = e.target.dataset.num;
    const farmDogsNumber = document.querySelector(".dogs");
    farmDogsNumber.textContent = e.target.dataset.dogs;
    console.log()
}
// (四)
// data-set / data-num
// 前面的ul先印出goodFarm的農夫名稱
// function(){}
// 後面的ul印出點到的農場資訊
// 因為目前只有ul所以用createElement 
// createElement  document.createElement("li") str textContent appendChild()  裡面
// innerHTML str＋ 外面  innerHTML會清空裡面的東西
// dataset 是屬性 就像id 就像class
//  因為要印出goodFarm的array的資料,可以用createElement
//  因為要印出goodFarm的array的資料,可以用innerHTML
//  如果是單存要印出其中一個點擊到的內容,可以用array
//  如果是要印出點擊的內容一個一個累積上去,用innerHTML
const ul2=document.querySelector("#ul2");
function farmUl2(){
    for(let i=0;i<goodFarm.length;i++){
        const str=document.createElement("li");
        str.setAttribute("data-num",`${i}`);
        //str.setAttribute("data-farmer",`${goodFarm[i].farmer}`);
        str.textContent=`農場主人：${goodFarm[i].farmer}`;
        console.log(str);
        ul2.appendChild(str);
        // str.textContent=`第${i+1} 個農場的主人：${goodFarm[i].farmer}`;

    }
}
farmUl2();
// 印出點擊內容
// 有兩種code的方法,其一是沒有註解,其二是註解的（連同上面function）,要記得註解打開要在把沒有註解的給註解
const ulClick=document.querySelector("#ulClick");
ulClick.setAttribute("class","ulClick");
console.log(ulClick);
ul2.addEventListener("click",ul2Click,false);
function ul2Click(e){
    if(e.target.nodeName !== "LI"){return};
    const str=document.querySelector("li");
    const num=e.target.dataset.num;
    const numParseInt = parseInt(num);
    str.textContent=` 第${numParseInt+1}個農場;${e.target.textContent}`;
    // str.textContent=` 第${numParseInt+1}個農場;農場主人：${e.target.dataset.farmer}`;

    ulClick.appendChild(str);
}


