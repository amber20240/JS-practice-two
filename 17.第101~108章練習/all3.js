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
// (五)
// todolist 
// input  btn 呈現文字 刪除＋呈現文字
// todolist需要loacalStorage是因為網頁關掉後如果沒有localStorage會無法儲存記錄, 如果有localStorage是可以把資料存在browser的localStorage的
// 1.給一個array可以存放input的內容製作
// 2.function renderarry內容（同常在最一開始 array不會有內容）
// 3.要注意function 用innerHTML ,因為innerHTML會把原本的資料清空
// 4.如果用createElement 之前的資料不會清空,就會一直重複
// 5.innerHTML / createElement 
// 5-1.input內容由btn點擊事件監聽把input的value傳入到array
// 5-2.innerHTML str外面 str+  innerHTML會清空原本的內容  (ul.innerHTML="")
// 5-3.createElement str 在裡面  textContent  ul.appendChild(str)
// 6.input的value傳到arry後,在透過localStorage存到browser的localStorage
// 7.localStorage.setItem("key",value)   JSON.string   localStorage.setItem("key") JSON.parse
// 8.JSON.string (因為localStorage只吃string)   JSON.string（因為localStorage只給string,透過JSON.parse可以變成array）
// 備註：setAttribute（"data-num",""） 可建立屬性
// 備註：input的value不能 code在function外,因為browser render的時候,input內還沒有文字,如果value code在function外browser render會同步取值,此時input內還沒有值,值是在input render後才填進去,所以value要code在監聽的function內,才取的到值
// 備註：array 新增內容  array push 
// 同上備註：原本farm=["bob","coco"]   farm.push("pink")  farm=["bob","coco"]
// 同上備註：object 新增內容 
// 同上備註：原本farm={farmer:"bob"}   farm.dogs=50 farm={farmer:"bob",dogs: 50}
// 同上備註：array + object  farm=[{farmer:"bob"}]  新增農場有狗  farm[0].dos=50   新增有另一個農場 const addfarm={farmer:"good",dog:50} farm.push(addfarm)  

// const happyFarm=[];
// const sixUl=document.querySelector(".six ul");
// sixUl.setAttribute("id","sixUl");
// function startHappyFarm (){
//     const str="";
//     for(let i=0;i<happyFarm.length;i++){
//         str+=`<li data-num="${i}">${happyFarm[i].farmer}</li>`
//     }
//     sixUl.innerHTML=str;
// }
// startHappyFarm();

// const sixBtn=document.querySelector("#button");
// sixBtn.addEventListener("click",btnClick,false);
// function btnClick(){
//     const todo=document.querySelector(".inputText").value;
//     const addHappyFarm={
//         content:todo
//     };
//     happyFarm.push(addHappyFarm);
//     const happyFarmString=JSON.stringify(happyFarm);
//     localStorage.setItem("farm",happyFarmString);
//     const happyFarmLocalStorage=localStorage.getItem("farm");
//     const happyFarmParse=JSON.parse(happyFarmLocalStorage);
//     console.log(happyFarm);
//     let str="";
//     for(let i=0;i<happyFarmParse.length;i++){
//         str+=`<li style="margin-bottom: 25px;"><button style="margin-right:25px;">刪除</button>${happyFarm[i].content}</li>`;
//     };
//     console.log(str);
//     sixUl.innerHTML=str;
// }
// const sixbtn=document.querySelector(".six ul li ")

// const color=["yellow","blue"];
// color.push("pink")
// console.log(color);
// const farmu={
//     farmer: "bob"
// }
// farmu.dogs="kiki";
// console.log(farmu);
// const farmt=[{
//     farmer: "gogo",
//     dogs: 20
// }]
// 新增 農場hourse
// farmt[0].content="h";
// console.log(farmt);
// const u={
//     farmer:"h"
// };
// farmt.push(u);
// console.log(farmt);


// (六)
// 資料  事件 介面
// todolist  - input btn ul li  splice
// 1.預設原始array資料  -  資料 
// 2.製作function 把原始資料印出到ul li (通常一開始沒有資料) / 在function接著抓input 的新的資料更新array
// 3.把input資料 印出介面(ul li ) 以及 把資料 存到browser 的 loalStorage 
// 4.splice資料 ＆ 儲存新的 array資料到browser 的localStorage ＆

// 抓dom


// 製作原始array(通常一開始不會有內容-[];當有內容後關掉browser在打開要透拿到browser的localStorage的資料來印出上一次的內容)
// loaclStorage.setItem("key",value) 因為localStorage只吃string  JSON.string   localStorage.setItem("key") localStorage給出的是string  JSON.parse
// 這邊是從localStorage拿到上次資料 

//  render最一開始的array 以及在下一次打開browser抓取localStorage的資料呈現於介面
// function todo(todolist){
//     let str="";
//     for(let i =0;i<todolist.length;i++){
//         str+=`<li><button data-num="${i}" id="btnSplice" style="margin-right: 10px">刪除</button>${todolist[i].content}</li>`
//     }
//     console.log(str);
//     sixUl.innerHTML=str;
// };

// 抓取值 印到介面 也localStorage到browser的localStorage 要記得JSON.stringify
// btn.addEventListener("click",addtodo,false);
// function addtodo(){
//     const inputTextContent=document.querySelector(".tp").value;
//     const newtodo={
//         content:inputTextContent
//     };
//     todolist.push(newtodo);
//     let str="";
//     for(let i =0 ;i<todolist.length;i++){
//        str+=`<li>${todolist[i].content}</li>`;
//     }
//     sixUl.innerHTML=str;
//     const todolistStringify=JSON.stringify(todolist);
//     localStorage.setItem("todolistContent",todolistStringify);
// }
// splice 刪除
// splice("第幾個","刪除幾個")
// 兩件事
// 一開始input 沒有任何問字
// 再次打開browser 有內容 localStorage
    // JSON.stringify()
    // localStorage.setItem("key","value")
    // localStorage.getItem("key")
    // JSON.parse
// innerHTML / createElement 
    // innerHTML 
        // str 會清除裡面的內容 str外面 str+ textContent ul.innerHTML=str
    // createElement 
        // str 不會清除裡面的內容 所以會一直重複 str 裡面  textContent ul.appendChild(str)
// dom


const inputTextAddToDo=document.querySelector(".tp");
console.log(inputTextAddToDo);
const btn=document.querySelector("#button");
const sixUl=document.querySelector(".six Ul");

let todolist = JSON.parse(localStorage.getItem("addtodolist"))||[];
function addtodolist(){
    let str ="";
    for(let i=0;i<todolist.length;i++){
        str+=`<li><button data-num="${i}" style="margin: 10px">刪除</button>${todolist[i].content}</li>`
    }
    sixUl.innerHTML= str;
};
addtodolist(todolist);

btn.addEventListener("click",inputTextToDo,false);
inputTextAddToDo.addEventListener("keydown",inputTextToDoKeydown,false);
function inputTextToDo(){
    if(inputTextAddToDo.value == ""){return};
    const textAddToDo=inputTextAddToDo.value;
    const addtodo = {
        content:textAddToDo
    };
    todolist.push(addtodo);
    const todoStringify = JSON.stringify(todolist);
    localStorage.setItem("addtodolist",todoStringify);
    addtodolist(todolist);
}
function inputTextToDoKeydown(e){
    if(e.keyCode !== 13){
        return
    }else if(inputTextAddToDo.value == ""){
        return
    };
    const textAddToDo=inputTextAddToDo.value;
    const addtodo = {
        content:textAddToDo
    };
    todolist.push(addtodo);
    const todoStringify = JSON.stringify(todolist);
    localStorage.setItem("addtodolist",todoStringify);
    addtodolist(todolist);
}

// 設定屬性
// setAttribute("id","good")
sixUl.addEventListener("click",todolistSplice,false);
function todolistSplice(e){
    if(e.target.nodeName !=="BUTTON"){return}; 
    const num=e.target.dataset.num;
    todolist.splice(num,1);
    addtodolist(todolist);
    const todolistStringify =JSON.stringify(todolist);
    localStorage.setItem("addtodolist",todolistStringify);
}

