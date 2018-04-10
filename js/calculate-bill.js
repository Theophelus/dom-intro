//get a reference to the calculate button
var calBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var totalBill = document.querySelector(".billTotal");
//get a reference to the billString
var billStringTxt =  document.querySelector(".billString");
//Declare a variable to store number of calls and sms with their prices
var total = 0;
//create the function that will be called when the calculate button is pressed
var totalPhoneBill = function(){
  //Split the textarea atring with a comma
  var billValue = billStringTxt.value;
  var splitBillString = billValue.split(",");
  //Loop over the enteredd string in the textarea
  for(var i=0; i<splitBillString.length; i++){
    //Trim all the white spaces between billString
    var trimBillString = splitBillString[i].trim();
    //Use if statements to check if its a call or an sms and add the right amount
    if(trimBillString.startsWith("c")){
      total += 2.75;
    }
    else if (trimBillString.startsWith("s")){
      total += .65;
    }
  }
  //Round the totalBill to two ddecimal
  var roundedTotalBill = total.toFixed(2);
  totalBill.innerHTML = roundedTotalBill;

  //Chjeck if totalBill is greater than 20 then raise warningSettings
  if(total >= 10){
    totalBill.classList.add("warning");
  }
  if(total >= 20){
    totalBill.classList.add("danger");
  }
}

//link the function to a click event on the calculate button
calBtn.addEventListener("click", totalPhoneBill);


/*var redCheck = function(){
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}
if(billItemType === "call"){
  callTotal += 2.75;
}

if(billItemType === "sms"){
  smsTotal += 0.75;
}
var totalBill = callTotal + smsTotal;

}*/
