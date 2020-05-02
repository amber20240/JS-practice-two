//  AJAX應用
//  API串接
const xhr=new XMLHttpRequest();
xhr.open("post","https://hexschool-tutorial.herokuapp.com/api/signup",true);
xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
xhr.send("email=ambergood@gmail.com&password=12345678");
xhr.onload=function (){
  console.log(xhr);
  console.log(xhr.readyState);
  console.log(xhr.status);
  console.log(xhr.responseText);
}

addeventListener
const el =document.querySelector("#code");
el.addEventListener("click",function,false)
function(){}
el.onload=function (){

}
