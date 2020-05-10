// var const let 比較
// var 
// 可以在global 也可以在local（區塊內;區塊＝{}) 
// 可以改變值
// 會hosting declare(宣告)的變數名稱,但不會hosting變數的值 

// const 可以用在 global 也可以用在
// let 不會用在global 可以用在local（區塊內;區塊＝{}）

// console.log(a);
// var a=1;
// console.log(a);


// console.log(b);
// const b=1;
// console.log(b);




function good(){
  console.log(c);
  let c=3;
  console.log(c)
}
good();