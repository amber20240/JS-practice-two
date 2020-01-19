const aMonth = 12;
const reataurantMonth =2;
const checkMonth = aMonth == reataurantMonth;
const bookingPeople = 5;
const nowPeople = 5;
const checkPeople = bookingPeople == nowPeople;

const el =document.getElementById("birthdayMonth");
el.textContent = checkMonth;

const elPeople = document.querySelector("#checkPeople");
elPeople.textContent = checkPeople;

