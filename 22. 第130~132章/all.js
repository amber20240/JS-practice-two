// 從後端拿資料,拿到的資料會是string
// 要用JSON.parse變回object
// readyState (get) ; post 的流程差不多
// 0
// const xhr = new XMLHttpRequest();
// 向伺服器請求一個可延伸的標記語言
// 1
// xhr.open("get 或 post","url",true)
// 設定一個xhr.open(get 或 post ,"url",true)
// 2
// xhr.send(null)
// 傳送給後端
// 3
// loading
// 4
// 拿到資料
// xhr.status  確認資料有沒有拿到（ 200有拿到資料 ; 404沒有拿到資料）

// get 
const emGet=document.querySelector("#emGet");
const xhr = new XMLHttpRequest();
xhr.open("get","https://hexschool.github.io/ajaxHomework/data.json",true);
xhr.send(null);
xhr.onload=function (){
  const xhrResponseText = JSON.parse(xhr.responseText);
  emGet.textContent= xhrResponseText[0].name;
} 

// post - application/x-www-form-urlencoded
const emUrlencodedYesNo =document.querySelector("#emUrlencodedYesNo");
const emUrlencodedResponseText=document.querySelector("#emUrlencodedResponseText");
const emUrlencodedStatus=document.querySelector("#emUrlencodedStatus");
const emUrlencodedReadyState=document.querySelector("#emUrlencodedReadyState");
const submitUrlencoded=document.querySelector("#submitUrlencoded");
submitUrlencoded.addEventListener("click",submitUrlencodedFunction,false);
function submitUrlencodedFunction(){
  // ul li 是用textContent  ; 值 input value 值(string)  如果是數字就用JSON.parseInt  number 
  const accountUrlencoded = document.querySelector("#accountUrlencoded").value;
  const passwordUrlencoded=document.querySelector("#passwordUrlencoded").value;
  const xhrUrlencoded = new XMLHttpRequest();
  xhrUrlencoded.open("post","https://hexschool-tutorial.herokuapp.com/api/signup",true);
  xhrUrlencoded.setRequestHeader("content-type","application/x-www-form-urlencoded");
  xhrUrlencoded.send(`email=${accountUrlencoded}&password=${passwordUrlencoded}`);
  xhrUrlencoded.onload = function(){
    if(xhrUrlencoded.status == 200){
      emUrlencodedYesNo.textContent = "yes"
    }else {
      emUrlencodedYesNo.textContent = "No"
    };
    const xhrUrlencodedResponseTextObject = JSON.parse(xhrUrlencoded.responseText);
    emUrlencodedResponseText.textContent = xhrUrlencodedResponseTextObject.message;
    emUrlencodedReadyState.textContent=xhrUrlencoded.readyState;
    emUrlencodedStatus.textContent = xhrUrlencoded.status;
  };
};

// post - application/JSON
const emJSONYesNo =document.querySelector("#emJSONYesNo");
const emJSONResponseText=document.querySelector("#emJSONResponseText");
const emJSONStatus=document.querySelector("#emJSONStatus");
const emJSONReadyState=document.querySelector("#emJSONReadyState");
const submitJSON=document.querySelector("#submitJSON");
submitJSON.addEventListener("click",submitJSONFunction,false);
function submitJSONFunction(){
  // ul li textContent  input value  number parseInt
  // 傳給後端的資料要string 在拿到資料後要JSON.parse
  const accountJSON = document.querySelector("#accountJSON").value; 
  const passwordJSON = document.querySelector("#passwordJSON").value;
  const xhrJSON= new XMLHttpRequest();
  xhrJSON.open("post","https://hexschool-tutorial.herokuapp.com/api/signup",true);
  xhrJSON.setRequestHeader("content-type","application/JSON");
  const accountPassword ={};
  accountPassword.email=accountJSON;
  accountPassword.password=passwordJSON; 
  const accountPasswordStringify = JSON.stringify(accountPassword);
  xhrJSON.send(accountPasswordStringify);
  xhrJSON.onload= function (){
    if(xhrJSON.status == 200){
      emJSONYesNo.textContent = "yes";
    }else{
      emJSONYesNo.textContent = "No";
    };
    const emJSONResponseTextObject = JSON.parse(xhrJSON.responseText);
    emJSONResponseText.textContent = emJSONResponseTextObject.message;
    emJSONReadyState.textContent = xhrJSON.readyState;
    emJSONStatus.textContent = xhrJSON.status;
  }
  };
  // signIn - post - application / JSON 
const signInYesNo = document.querySelector("#signInYesNo");
const signInResponseText = document.querySelector("#signInResponseText");
const signInReadyState = document.querySelector("#signInReadyState");
const signInStatus =document.querySelector("#signInStatus");
const submitSignIn = document.querySelector("#submitSignIn");
submitSignIn.addEventListener("click",submitSignInFunction,false);
function submitSignInFunction(){
  // ul li textContent  input value  number parseInt
  const accountSignIn = document.querySelector("#accountSignIn").value;
  const passwordSignIn = document.querySelector("#passwordSignIn").value;
  const signIn={};
  signIn.email=accountSignIn;
  signIn.password=passwordSignIn;
  const xhrSignIn = new XMLHttpRequest();
  xhrSignIn.open("post","https://hexschool-tutorial.herokuapp.com/api/signin",true);
  xhrSignIn.setRequestHeader("content-type","application/JSON");
  // 給後端資料要給string
  const xhrSignInStringify = JSON.stringify(signIn);
  xhrSignIn.send(xhrSignInStringify);
  xhrSignIn.onload = function (){
    if(xhrSignIn.status == 200){
      signInYesNo.textContent = "yes"
    }else{
      signInYesNo.textContent = "No" 
    }
  // 後端給的資料是stringify 要JSON.parse
  const xhrSignInObject = JSON.parse(xhrSignIn.responseText);
  signInResponseText.textContent = xhrSignInObject.message;
  signInReadyState.textContent = xhrSignIn.readyState;
  signInStatus.textContent = xhrSignIn.status; 
  };
}
