//get a reference to the calculate button
var calBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var totalBill = document.querySelector(".billTotal");
//get a reference to the billString
var billStringTxt =  document.querySelector(".billString");
//Declare a variable to store number of calls and sms with their prices
//create the function that will be called when the calculate button is pressed
var totalPhoneBill = function(){
  //Split the textarea atring with a comma
  var billValue = billStringTxt.value;
  var splitBillString= billValue.split(",");

  var total = 0;

  //Loop over the enteredd string in the textarea
  for(var i=0; i<splitBillString.length; i++){
    //Trim all the white spaces between billString
    var trimBillString = splitBillString[i].trim();
//    //Use if statements to check if its a call or an sms and add the right amount
    if(trimBillString === "call"){
      total += 2.75;
    }
    if (trimBillString === "sms"){
      total += .65;
    }
  }
  //Round the totalBill to two ddecimal
  var roundedTotalBill = total.toFixed(2);
  totalBill.innerHTML = roundedTotalBill;

  //Check if total is greater than 20 but less than or equals to 30
  // then raise warningSettings else if less than remove warning levels
  if(total >= 20 && total <= 30){
    totalBill.classList.add("warning");
  }else if(total < 20){
    totalBill.classList.remove("warning");
  }
  //Check if total is greater than 30 then raise critical levels else if less than remove critical levels
  if(total >= 30){
    totalBill.classList.add("danger");
  }else if (total < 30) {
    totalBill.classList.remove("danger");
  }
}

//link the function to a click event on the calculate button
calBtn.addEventListener("click", totalPhoneBill);
