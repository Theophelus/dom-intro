//create the function that will be called when the calculate button is pressed
var totalPhoneBill = function( billValue){
  var splitBillString= billValue.split(",");

  var total = 0;

  for(var i=0; i<splitBillString.length; i++){

    var trimBillString = splitBillString[i].trim();

    if(trimBillString === "call"){
      total += 2.75;
    }else if (trimBillString === "sms"){
      total += 0.75;
    }
  }
    return total.toFixed(2)
  }
