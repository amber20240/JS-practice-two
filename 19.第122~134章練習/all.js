  // 17:45 用onload改寫 
  // XML 流程
  // XML 看狀態單字 XML.responseText XML.readyState XML.
  // 在 netWork

  // const xhr= new XMLHttpRequest();
  //  向伺服器請求一個可延伸的標記與語言
  // xhr.open("get","url",false)
  //  設定一個xhr,open("get","url",false)
  //  grt取得資料  
  //  false 同步  true 非同步
  //  false 等撈到後端資料才開始跑ｊｓ下面的資料
  //  true 非同步沒有等撈到資料就繼續跑JS下面的code
  // xhr.send(null)
  // 傳送資料給後端,但因為我們現在要取值,所以是null

  // readyState 順序
    // 0 const xhr=newXMLHttpsRequest(); 請求伺服器建立一個可延伸的標記語言
    // 1 xhr.open("get","url",false) ; 設定一個 xhr.open("get","url",false)
    // 2 xhr.send(null);偵測資料以傳送給後端
    // 3 loading
    // 4 拿到資料

    // 先取到值

    
 // 第一個true
 const xhr=new XMLHttpRequest();
 const p1=document.querySelector(".p1");
 xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",true);
 xhr.send(null);
 xhr.onload=function (){
   const str=JSON.parse(xhr.responseText)
   p1.textContent =str[0].name;
 }
 
// xhr.readyState 情況
// 現在要印出狀態有沒有拿到值
const emCatchData=document.querySelector("#emCatchData");
const emNoCatchData=document.querySelector("#emNoCatchData");
console.log(emCatchData);
console.log(emNoCatchData);
const xhrEmCatchData = new XMLHttpRequest();
xhrEmCatchData.open("get","https://hexschool.github.io/ajaxHomework/data.json",true);
xhrEmCatchData.send(null);
xhrEmCatchData.onload=function (){
  emCatchData.textContent=xhrEmCatchData.status;
};
const xhremNoCatchData=new XMLHttpRequest();
xhremNoCatchData.open("get","https://hexschool.github.io/ajaxHomework/data.json",true);
xhremNoCatchData.send(null);
xhremNoCatchData.onload=function(){
  emNoCatchData.textContent = xhremNoCatchData.status;
}
// 17:01
// 用判斷來印出資料,如果不是則印出錯誤
const emDataYes=document.querySelector("#emDataYes");
const emDataNo=document.querySelector("#emDataNo");
const xhrDataIfYes  = new XMLHttpRequest();
const xhrDataIfNo =new XMLHttpRequest();
xhrDataIfYes.open("get","https://hexschool.github.io/ajaxHomework/data.json",true);
xhrDataIfYes.send(null);
console.log(xhrDataIfYes);
xhrDataIfYes.onload=function(){
  if(xhrDataIfYes.status == 200){
    const str=JSON.parse(xhrDataIfYes.responseText);
    console.log(str);
    emDataYes.textContent=str[0].name;
  }else{
    alert("沒有接收到資料")
  }
}
xhrDataIfNo.open("get","https://hexschool.github.io/ajaxHomework/newdata.json",true);
xhrDataIfNo.send(null);

xhrDataIfNo.onload=function(){
  if(xhrDataIfNo.status == 200){
    emDataNo.textContent="找到答案"
  }else{
    emDataNo.textContent="沒有拿到值"
  }
}


