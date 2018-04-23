//Declare an object instance of the fsctory function
var newRadioBill = RadioButtonBill();
// get a reference to the sms or call radio buttons, callTotal, smsTotal and totalTwo
var callsLbl = document.querySelector(".callTotalTwo");
var billTotal = document.querySelector(".totalTwo");
var smsLbl = document.querySelector(".smsTotalTwo");
//get a reference to the add button
var radioBillBtn = document.querySelector(".radioBillAddBtn");
radioBillBtn.addEventListener("click", function(){
  //Assign both radio buttons
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if(checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
  }
  //Call all methods in the factory function using its object instance and pass billItemType
  //  as parameter
  newRadioBill.billCallTotal(billItemType)
  newRadioBill.billSmsTotal(billItemType);
  var calTotal = newRadioBill.calRadioBillTotal();
  //create a variable that will keep track of the total bill
  callsLbl.innerHTML = newRadioBill.returnCallTotal().toFixed(2);
  smsLbl.innerHTML = newRadioBill.returnSmsTotal().toFixed(2);
  calTotal = newRadioBill.returnCallTotal() + newRadioBill.returnSmsTotal();
  billTotal.innerHTML = calTotal.toFixed(2);

  //Check restriction levels
  //Add a variable to cal
  if(calTotal >= 30){
  billTotal.classList.add("warning");
  }
  if (calTotal >= 50 || calTotal == 50) {
  billTotal.classList.add("danger");
  radioBillBtn.disabled = true;
  }
});
