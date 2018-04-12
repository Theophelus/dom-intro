// get a reference to the textbox where the bill type is to be entered
var billTxt = document.querySelector(".billTypeText");
var callElem = document.querySelector(".callTotalOne");
var smsElem= document.querySelector(".smsTotalOne");
//get a reference to the add button
var calculate = document.querySelector(".addToBillBtn");

//create a variable that will keep track( of the total bill
var totalCostElem = document.querySelector(".totalOne");
var totalCost = 0;
var textCallTotal = 0;
var textSmsTotal = 0;

//Add a function call inputBill
var textBillTotal = function(){
  //Initialise billTxt
  var billString = billTxt.value;

  //in the event listener check if the value in the bill type textbox is 'sms' or 'call'
  if(billString.startsWith("c")){
    textCallTotal += 2.75;
  }
  else if(billString.startsWith("s")){
    textSmsTotal += .75;
  }

  //Initialise all the labels with call and sms total
  callElem.innerHTML = textCallTotal.toFixed(2);
  smsElem.innerHTML = textSmsTotal.toFixed(2);

  //Calculate the total amount of calls and sms's
  totalCost = textCallTotal + textSmsTotal;
  //initialise total amount with totalBill reference
  totalCostElem.innerHTML = totalCost.toFixed(2);


  //Add danger if total Cost is greater than or Equal to R50
  if(totalCost >= 30){
    totalCostElem.classList.add("warning");
  }
  if(totalCost >= 50){
    totalCostElem.classList.add("danger");
  }

}
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

//add an event listener for when the add button is pressed
calculate.addEventListener("click", textBillTotal);
