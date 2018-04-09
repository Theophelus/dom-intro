// get a reference to the sms or call radio buttons
var callTotalElem = document.querySelector(".callTotalSettings");
var smsTotalElem = document.querySelector(".smsTotalSettings");
var totalElem = document.querySelector(".totalSettings");

// get refences to all the settings fields
var callCostElem = document.querySelector(".callCostSetting");
var smsCostElem = document.querySelector(".smsCostSetting");
var warningLevelElem = document.querySelector(".warningLevelSetting");
var criticalLevelElem = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
var addElem = document.querySelector(".addButton");
//get a reference to the 'Update settings' button
var updatesettingsElem = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
var callCostTotal = 0;
var smsCostTotal = 0;
var warningLevelTotal = 0;
var criticalTotal = 0;

// create a variables that will keep track of all three totals.
var callTotal = 0;
var smsTotal = 0;
var toalForAll = 0;


//Create a function foe update settings
var updateSettings = function(){
  //Initialise all variables to keep track of all settings
  var callSettings = callCostElem.value;
  var smsSettings = smsCostElem.value;
  var warningSettings = warningLevelElem.value;
  var criticalSettings = criticalLevelElem.value;
  //Check if all settings contain a string, if contain a string change into a decimal.....

  if(callSettings !=""){
    callCostTotal = parseFloat(callSettings);
  }
  if(smsSettings !="") {
    smsCostTotal = parseFloat(smsSettings);
  }

  if (warningSettings !=""){
    warningLevelTotal = parseFloat(warningSettings);
  }
  if(criticalSettings !=""){
    criticalTotal = parseFloat(criticalSettings);
  }
}
//create a function for billSetting
var billSettings = function(){
  //in the event listener get the value from the billItemTypeRadio radio buttons
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if(checkedRadioBtn){
    var radChecked = checkedRadioBtn.value;
  }
  // * add the appropriate value to the call / sms total
  if(radChecked === "call"){
    callTotal += callCostTotal;

  }
  if(radChecked === "sms"){
    smsTotal += smsCostTotal;
  }
  console.log(smsTotal);
  // * add the appropriate value to the overall total
  // * display the latest total on the screen.
  callTotalElem.innerHTML = callTotal.toFixed(2);
  smsTotalElem.innerHTML = smsTotal.toFixed(2);
  totalForAll = callTotal + smsTotal;
  totalElem.innerHTML = totalForAll.toFixed(2);
  // * check the value thresholds and display the total value in the right color.

  if(totalForAll >= warningLevelTotal){
    totalElem.classList.add("warning");
  }
   if (totalForAll >= criticalTotal) {
    totalElem.classList.add("danger");

  }
  // else if (totalForAll >= criticalSettings){
  //   totalElem.classList.add("danger");
  // }
}
// * add nothing for invalid values that is not 'call' or 'sms'.

//add an event listener for when the 'Update settings' button is pressed
updatesettingsElem.addEventListener("click", updateSettings);
//add an event listener for when the add button is pressed
addElem.addEventListener("click", billSettings);
