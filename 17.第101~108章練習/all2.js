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
// datatset / data-num
// 目標：印出array原始資料 / 點擊到可以印出
// 1.印出array原始資料
// function (){}
// function內要帶入dataset才可以讓下方的監聽知道目前點擊到第幾個
// goodFarm是array所以要用for迴圈來印出
// createElement / innerHTML比較
// createElement document.createElement 在裡面 str textContent appendChild(str) 不會清空內容
// setAttribute （str.setAttribute("data-num","")） 建立屬性 如：id data-num dataset data-dogs dataset是可以對應到array的內容（有點像同步）
// e.target.dataset.num e.target.dataset.hourse
// 這邊用到parseInt 為了要把字串轉成數字
// innerHTML str+ innerHTML="" 在外面  會清空裡面的東西
// 2.點擊到可以印出
// 監聽整個ul ,判斷是否點擊到li
// 點擊到要印出點到第幾個,農場有幾隻狗
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
}];
const threeUl=document.querySelector(".three #ul");
function setThreeGoodFarm(){
    for(let i=0;i<goodFarm.length;i++){
        let str = document.createElement("li");
        str.setAttribute("data-num",`${i}`);
        str.setAttribute("data-dogs",`${goodFarm[i].dogs}`);
        console.log(str);
        str.textContent = `農場主人：${goodFarm[i].farmer}`;
        threeUl.appendChild(str);
    }
};
setThreeGoodFarm();
const farmNumberEm=document.querySelector(".farmNumber");
const dogsNumberEm=document.querySelector(".dogs");
threeUl.addEventListener("click",threeUlClick,false);
function threeUlClick(e){
    if(e.target.nodeName !== "LI"){return};
    farmNumberEm.textContent = `${parseInt(e.target.dataset.num)+1}`;
    dogsNumberEm.textContent=e.target.dataset.dogs;
}
// (四)
// 目標：印出array / 依序印出點擊到的內容 （ 可用createElement 因為沒有要清空內容, 是依序印出,所以會有重複的,如果是要沒有重複的可以用innerHTML因為innerHTML可以清空裡面的內容）
// 1.印出array
// for() 
// 可以用createElement / innerHTML
// createElement 不會清空裡面的內容 document.createElement() str 在裡面 textContent  ul.appendChild(str)
// 可以用在依序印出有重複的
// innerHTML 裡面的東西會清空 str+ 在外面
// 2.監聽ul的點擊
// 判斷是否有點擊到li
// 點擊到li後印出點擊到農場是第幾個和農場主人名稱
const setFourUl = document.querySelector("#ul2");
function setFourLi(){
    for(let i=0;i<goodFarm.length;i++){
        let str = document.createElement("li");
        str.setAttribute("data-num",`${i}`);
        str.setAttribute("data-dogs",`${goodFarm[i].dogs}`);
        str.textContent = `農場主人：${goodFarm[i].farmer}`;
        setFourUl.appendChild(str);
    }
};
setFourLi();
setFourUl.addEventListener("click",fourUlClick,false);
const fourUl = document.querySelector("#ulClick");
function fourUlClick(e){
    if(e.target.nodeName !== "LI"){return};
    // 印出農場主人名稱
    // 印出點到的事第幾個農場,可用e.target.dataset.num 會與array的順序同步
    const strNum = e.target.dataset.num;
    const strFarmer = e.target.textContent;
    console.log(strNum);
    const ulClickLi=document.createElement("li");
    ulClickLi.textContent=`第${parseInt(strNum)+1}個農場的農場主人${strFarmer}有${goodFarm[e.target.dataset.num].dogs}條狗`;
    fourUl.appendChild(ulClickLi);
}
// (五)
// 目標：印出農場資料,點擊到刪除
// 目前只有ul,要做li,會想到createElement / innerHTML
// createElement document.createElement  str 放在裡面 textContent ul.appendChild(str) 不會清空裡面的東西
// 會重複出現li的內容,因為不會清空
// innerHTML str 放在外面 str+ 會清空裡面的內容 所以不會重複出現 會一直更新
// innerHTML  會清空原本上一次的str內容
// 1.印出array的資料
// function 
// array 用 for迴圈印出
// 2.點擊到要刪除
// 監聽ul,判斷是否為li
// splice 是刪除array(這邊的array可以先想成是由中央給function的企劃範本,所以最原始的array並不會被改到,只有function內的arry會被改到,所以可以在function內做刪除)
// 因為刪除後要印出array ,所以要呼叫第1步驟的function,但第1步驟不能用createElement 因為createElement不會清空原本的內容物
// 所以改用innerHTML , innerHTML會清空裡面的東西
// 3.因為刪除array裡面某一項,所以要更新array的資料（如更新刪除的內容,dataset的順序）
const fiveUl=document.querySelector(".five ul");
fiveUl.setAttribute("id","fiveId");
function fiveFarm(){
    let str="";
    for(let i=0;i<goodFarm.length;i++){
        str+=`<li data-num="${i}">${goodFarm[i].farmer}</li>`
    }
    fiveUl.innerHTML=str;
}
fiveFarm();
const fiveul=document.querySelector("#fiveId");
fiveul.addEventListener("click",fiveU,false);
function fiveU(e){
    goodFarm.splice("e.target.dataset.num","1");
    fiveFarm();
}