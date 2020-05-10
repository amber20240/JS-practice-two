// var for迴圈 應用  
// var變數會是global ,for迴圈的變數 "會" 污染到全域的變數

// let for迴圈 應用 
// let變數會是local ,for迴圈的變數 "不會" 污染到全域的變數

// 用var來宣告變數 ,會影響到global 和 local

// var i=8;
// for ( var i=0 ; i<3 ; i++ ){
//   console.log(i)
// }

// console.log(`function外的i是${i}`)
// for迴圈應該要用let
var i=8;
for(let i=0;i<3;i++){
  console.log(i)
}
console.log(i)