// AJAX 應用 -API串接 -get
const xhr=new XMLHttpRequest();
xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",true);
xhr.send(null);
xhr.onload=function(){
  console.log(xhr);
  console.log(xhr.readyState);
  console.log(xhr.responseText);
  console.log(xhr.readyStatus);
  const get=document.querySelector("#get");
  console.log(typeof(xhr.responseText));
  const getParse = JSON.parse(xhr.responseText);
  console.log(typeof(getParse));
  get.textContent = getParse[0].name;
} 
// 使用AJAX應用 post 傳送資料給後端驗證是否帳號有重複  urlencoded
const em1=document.querySelector("#em1");
const submit=document.querySelector("#submit");
submit.addEventListener("click",newAccount,false);
function newAccount(){
  const account=document.querySelector("#account").value;
  const password=document.querySelector("#password").value;
  console.log(account);
  console.log(password);
  const xhr1=new XMLHttpRequest();
  xhr1.open("post","https://hexschool-tutorial.herokuapp.com/api/signup",true);
  xhr1.setRequestHeader("content-type","application/x-www-form-urlencoded");
  xhr1.send(`email=${account}&password=#${password}`);
  xhr1.onload=function (){
    const responseTextParse=JSON.parse(xhr1.responseText);
    em1.textContent=responseTextParse.message;
  }
};
// post 傳送資料給後端 用JSON 格式
const em2=document.querySelector("#em2");
const submit2=document.querySelector("#submit2");
submit2.addEventListener("click",submit2Word,false);
function submit2Word(){
  const account2=document.querySelector("#account2").value;
  const password2=document.querySelector("#password2").value;
  const xhr2=new XMLHttpRequest();
  xhr2.open("post","https://hexschool-tutorial.herokuapp.com/api/signup",true);
  xhr2.setRequestHeader("content-type","application/JSON");
  const accountOk={
    email:account2,
    password:password2,
  };
  const accountOkStringify=JSON.stringify(accountOk);
  xhr2.send(accountOkStringify);
  xhr2.onload=function (){
    const responseTextObject=JSON.parse(xhr2.responseText);
    alert("good");
    console.log(typeof(xhr2.responseText));
    em2.textContent=responseTextObject.message;
  }
}
// const xhr2=new XMLHttpRequest();
// xhr2.open("post","url",true);
// xhr2.setRequestHeader("content-type","application/JSON");
// const good={
//   email: 
// }
// xhr.setRequestHeader("")