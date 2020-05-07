// practice account 
// account  傳到後端 password 串到後端 驗證是否有重複
// 這裡開始
// 先監聽submit 點擊後抓 account password的值,在到後端做驗證
const readyState =document.querySelector("#readyState");
const responseText =document.querySelector("#responseText");
const status =document.querySelector("#status");
const yesOrNo =document.querySelector("#yesOrNo");
const submit =document.querySelector("#submit");
submit.addEventListener("click",getData,false);
function getData(){
  // ul li textContent 值   input  value 值 如果是 number JSON.parseInt()
  const account = document.querySelector("#account").value;
  const password = document.querySelector("#password").value;
  const data={};
  data.email=account;
  data.password=password;
  console.log(data);
  const xhr = new XMLHttpRequest();
  xhr.open("post","https://hexschool-tutorial.herokuapp.com/api/signup",true);
  xhr.setRequestHeader("content-type","application/JSON");
  // 因為後端只吃string
  const dataStr = JSON.stringify(data);
  xhr.send(dataStr);
  xhr.onload= function (){
    readyState.textContent=xhr.readyState;
    // 從後端傳回來的資料是string 使用JSON.parse
    const callbackData = xhr.responseText;
    const callbackDataObject = JSON.parse(callbackData);
    console.log(callbackDataObject);
    responseText.textContent = callbackDataObject.message;
    status.textContent = xhr.status;
    if(xhr.status == 200){
      yesOrNo.textContent = "yes"
    }else{
      yesOrNo.textContent = " No"
    }
  }
}