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
