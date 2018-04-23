
//Create a factory function call factoryRadioBill
var RadioButtonBill = function(){
  var smsTotal = 0;
  var callTotal = 0;
  var totalBill = 0;
  //Add a method to calculate call Totals
  var billCallTotal = function(billItemType){
    if(billItemType ==="call"){
      callTotal += 2.75;
    }
  }
  //Add a return function to call Total variable
    var returnCallTotal = function(){
      return callTotal;
    }
  //Add a function for calculate sms Total
  var billSmsTotal = function(billItemType){
    if(billItemType ==="sms"){
      smsTotal += .75;
    }
  }
  //Add a return function to sms Total varaible
  var returnSmsTotal = function(){
      return smsTotal
    }
  //Add a function to calculate Total bill
  var calRadioBillTotal = function(){
    return totalBill = callTotal + smsTotal;
  }
  //Return those methods as object literals
  return {
    billCallTotal,
    returnCallTotal,
    billSmsTotal,
    returnSmsTotal,
    calRadioBillTotal
  }
}
