// 做兩個頁面（透過點擊按鈕跳轉回到上一頁 / 透過跳轉到下一頁）
// 因為兩個頁面要吃的all.js檔不一樣,所以兩個browser要分開寫不同的all.js
    // 如 只有一個all.js檔  當有兩個browser 則兩個browser都會吃到all.js的內容,但browser2不會有browser1的id則會跳錯
// 1.監聽點擊
// 2.funcion - window.history.back() 到上一頁 / window.history.forward()
      // window.history.back() 只能在已經有到下一頁過才能使用,所以第一次點擊的時候還是給a連結
      // window.history.forward() 
const nextOne = document.querySelector("#nextOne");
const nextHistory = document.querySelector("#nextHistory");
const browserPrint = document.querySelector("#print");

nextOne.addEventListener("click",nextPage,false);
nextHistory.addEventListener("click",nextPageHistory,false);
browserPrint.addEventListener("click",pagePrint,false);
function nextPage(){
  window.location.href="./index2.html"
};
// function backPage(){
//   window.history.back()
// };
function nextPageHistory(){
  window.history.forward();
}
function pagePrint(){
  window.print()
}
// 跳轉到下一頁（ window.location() ）/ 回上一頁(window.historage.back) / 到下一頁 (window.historage.forward()) 
// 看現在網址位置(window.location())
// 跳轉到另一個網址(不會開新分頁) (window.location.href="./index2.html")
// 跳轉到另一個頁面（會開新的分頁）(window.open("網址"))
const nextPageGoogle = document.querySelector("#nextPageGoogle");
const googleLocation =document.querySelector("#googleLocation");
nextPageGoogle.addEventListener("click",googlePage,false);
function googlePage(){
  googleLocation.textContent=window.location;
  window.location.href="https://www.google.com.tw/";
}
const googleNewPage= document.querySelector("#nextPageGoogleNew");
const googleLocationNew = document.querySelector("#googleLocationNew");
googleNewPage.addEventListener("click",newGooglePage,false);
function newGooglePage(){
  window.open("https://www.google.com.tw/");
  googleLocationNew.textContent = window.location.href;
}
// innerheight / outerheight
// 使圖片大小與innerheight一樣高
document.querySelector(".image2").style.height=window.innerHeight+"px";
document.querySelector(".image2").style.width=window.innerWidth+"px";
window.addEventListener("resize",imgSize,false);
const img=document.querySelector(".image2");
function imgSize(){
  img.style.width=`${window.innerwidth}px`;
  img.style.height=`${window.innerHeight}px`;
}

// 練習XML / readyState 順序 
// XML 

// const xhr=new XMLHttpRequest();
//  向伺服器請求一個 可延伸的標記語言
// xhr.open("get","url",false)
// false 同步  
// 等資料回傳回來才繼續跑JS的code
// true非同步
// 沒有等資料回傳回來就繼續跑ｊｓ下面的code
// xhr.send(null)
// 因為沒有要傳送資料給後端,所以是用null

//  ready state

// 0  const xhr=new XMLHttpRequest()  向伺服器請求一個可延伸標記的語言 
// 1  打開xhr.open("get","url",false)  
// 2  xhr.send(null)
// 3  loading 
// 4  收到資料


// const xhr=new XMLHttpRequest();
// 向伺服器請求一個可延伸的標記語言
// xhr.open("get","url",false)
// 打開xhr.open("get","url",false)
// xhr.send(null)
// 向後端傳送值,但因為現在是要向後端取值,所以不用給值（null）
// const y= 2;
// console.log(y);
// let i=5;
// console.log(i);
// i=3;
// console.log(i);
