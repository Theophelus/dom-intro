// Create a factory function for text Bill Totlal  called factoryTextBill
var factoryTextBill = function(billString){
  //Declare Global variable inside factory function
  var totalCost = 0;
  var textCallTotal = 0;
  var textSmsTotal = 0;
  //create a function to calculate call bill
  var callBill = function(billString){
    if(billString === "call"){
      textCallTotal += 2.75;
    }
  }
  //Create a function to return Text Call Totalsvar
  var returnTextCallTotal = function(){
    return textCallTotal;
  }
  //create a function to calculate sms bill
  var smsBill = function(billString){
    if(billString == "sms"){
      textSmsTotal += .75;
    }
  }
  //create a function to return Text Sms Total
var returnTextSmsTotal = function(){
  return textSmsTotal;
}

  var totalCostBill = function(){
    return totalCost = textCallTotal + textSmsTotal;
  }
  return {
    returnTextCallTotal,
    returnTextSmsTotal,
    call: callBill,
    sms: smsBill,
    grandTotal: totalCostBill
  }
}
