// const 特性  可以用在global/local(區塊內;區塊＝{})  不可修改值  如果是object/array可以修改attribute(屬性)

// const 不可修改值
const a=1;
console.log(a);
//  a=2;   不能改變值
// console.log(a);   console.log()出來會 跑出  assignment(分配) to const variable（變數）＝>表示請給變數一個值（會出現在未給變數值的時候 and 重覆const 同一個變數） 

// const Object   
// Object attribute(屬性)的值可以被修改
const book={
  id:2
}
book.id=3;
console.log(book);
Object.freeze(book);
book.id=5;
console.log(book);




