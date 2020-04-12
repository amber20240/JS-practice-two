const lastPage = document.querySelector("#last");
lastPage.addEventListener("click",backPage,false);
function backPage(){
  window.history.back(); 
}