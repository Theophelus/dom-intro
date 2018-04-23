//Factory function instance of totalPhoneBill
//totalPhoneBill()
//get a reference to the calculate button
var calBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var totalBill = document.querySelector(".billTotal");
//get a reference to the billString
var billStringTxt =  document.querySelector(".billString");
//Declare a variable to store number of calls and sms with their prices
var total = 0;
//var billValue = billStringTxt.value;
calBtn.addEventListener("click", function(){
var billValue = billStringTxt.value;
var roundedTotalBill = totalPhoneBill(billValue);
totalBill.innerHTML = roundedTotalBill;

//Check if total is greater than 20 but less than or equals to 30
// then raise warningSettings else if less than remove warning levels
if(roundedTotalBill >= 20 && roundedTotalBill <= 30){
  totalBill.classList.add("warning");
}else if(roundedTotalBill < 20){
  totalBill.classList.remove("warning");
}
//Check if total is greater than 30 then raise critical levels else if less than remove critical levels
if(roundedTotalBill >= 30){
  totalBill.classList.add("danger");
}else if (roundedTotalBill < 30) {
  totalBill.classList.remove("danger");
}
});
