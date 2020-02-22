// <h2>(一)點擊按鈕，console.log出mouseEvent資訊</h2>
const el = document.querySelector("#btne");
el.onclick = function(e) {
  console.log(e);
};

// 監聽到點擊，顯示出你已經點擊的字樣
const el2 = document.querySelector("#btn2");
el2.addEventListener("click", c1, false);
function c1() {
  let el3 = document.querySelector("#box2Span");
  el3.textContent = "有點擊到";
}
