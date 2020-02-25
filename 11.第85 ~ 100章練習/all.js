// <h2>(一)點擊按鈕，console.log出mouseEvent資訊</h2>
const el = document.querySelector("#btne");
el.onclick = function(e) {
  console.log(e);
};

// （二）監聽到點擊，顯示出你已經點擊的字樣
const el2 = document.querySelector("#btn2");
el2.addEventListener("click", c1, false);
function c1() {
  let el3 = document.querySelector("#box2Span");
  el3.textContent = "有點擊到";
}

// (三)綁定事件的語法差異(onclick / click)
const el4 = document.querySelector("#btn3");
el4.onclick = function() {
  let el5 = document.querySelector("#box3Span1");
  el5.textContent = "1";
};
el4.onclick = function() {
  let el6 = document.querySelector("#box3Span2");
  el6.textContent = "2";
};
const btnClick = document.querySelector("#btny4");
const el7 = document.querySelector("#box3Span3");
const el8 = document.querySelector("#box3Span4");
btnClick.addEventListener("click", click1, false);
function click1() {
  el7.textContent = "1";
}
btnClick.addEventListener("click", click2, false);
function click2() {
  el8.textContent = "2";
}

// Event bubbling / Event capturing
const el12 = document.querySelector(".box-inner2");
el12.addEventListener("click", blueBtn, false);
function blueBtn() {
  alert("我是點擊到blue");
}
const el13 = document.querySelector(".box-inner");
el13.addEventListener("click", yellowBtn, false);
function yellowBtn() {
  alert("我是點擊到blue後,觸發event bubbling到yellow");
}
const el14 = document.querySelector(".box-inner52");
el14.addEventListener("click", pinkBtn, true);
function pinkBtn() {
  alert("因為event capturing,所以會在event capturing的blue後才出現的pink區域");
}
const el15 = document.querySelector(".box-inner5");
el15.addEventListener("click", blueBtn, true);
function blueBtn() {
  alert("我是點擊到event capturing的blue");
}

// stopPropagation / preventDefault
const el16 = document.querySelector(".box6-inner");
el16.addEventListener("click", pinkBtn16, false);
function pinkBtn16(e) {
  e.stopPropagation();
  alert("現在點擊到pink區域");
}
const el17 = document.querySelector(".box6-out");
el17.addEventListener("click", yellowBtn16, false);
function yellowBtn16() {
  alert("現在點擊到blue區域");
}
const el18 = document.querySelector(".box7 a");
el18.setAttribute("href", "https://www.google.com.tw/");
el18.addEventListener("click", preventDefaultBtn, false);
function preventDefaultBtn(e) {
  e.preventDefault();
  alert("我是a連結,因為使用preventDefault 不會跳轉其他頁面");
}
// e.target / e.target.nodeName
const el19 = document.querySelector(".box8");
el19.addEventListener("click", targetClick, false);
const el20 = document.querySelector(".box8 span");
function targetClick(e) {
  console.log(e.target);
  el20.textContent = e.target.nodeName;
}
// 選單的change
const farm = [
  {
    farmer: "kok",
    year: 1990,
    dogs: 2
  },
  {
    farmer: "wow",
    year: 1991,
    dogs: 2
  }
];
const el21 = document.querySelector("#select1");
el21.addEventListener("change", option1, "false");
const el22 = document.querySelector(".box9 ul");
function option1(e) {
  let str = "";
  for (let i = 0; i < farm.length; i++) {
    if (e.target.value == farm[i].year) {
      str += `<li>農夫的名字：${farm[i].farmer}，農夫養了：${farm[i].dogs}狗</li>`;
    }
  }
  el22.innerHTML = str;
}
const el23 = document.querySelector("#select2");
el23.addEventListener("change", t, false);
const el24 = document.querySelector(".box10");
function t(e) {
  for (let i = 0; i < farm.length; i++) {
    if (e.target.value == farm[i].year) {
      let str = document.createElement("li");
      str.textContent = `${farm[i].farmer}`;
      el24.appendChild(str);
    }
  }
}
