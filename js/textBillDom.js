//Create an instance of factory Text Bill function
var functionCall = factoryTextBill();
// get a reference to the textbox where the bill type is to be entered
var totalCostElem = document.querySelector(".totalOne");
var billTxt = document.querySelector(".billTypeText");
var callElem = document.querySelector(".callTotalOne");
var smsElem= document.querySelector(".smsTotalOne");
//get a reference to the add button
var calculate = document.querySelector(".addToBillBtn");
calculate.addEventListener("click", function(){
  var billString = billTxt.value;
  functionCall.call(billString);
  functionCall.sms(billString);
  callElem.innerHTML = functionCall.returnTextCallTotal().toFixed(2);
  smsElem.innerHTML = functionCall.returnTextSmsTotal().toFixed(2);
  //initialise total amount with totalBill reference
  totalCostElem.innerHTML = functionCall.grandTotal().toFixed(2);

  // //Add danger if total Cost is greater than or Equal to R50
  var totalCost = functionCall.grandTotal();
  if(totalCost >= 30){
    totalCostElem.classList.add("warning");
  }
  if(totalCost >= 50){
    totalCostElem.classList.add("danger");
    calculate.disabled = true;
  }
});
