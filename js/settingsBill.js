
//Create a factory function for called SettingBill
var SettingBill = function(){
  // create a variables that will keep track of all the settings
  var callCost = 0;
  var smsCost = 0;
  var warningLevel = 0;
  var criticalLevel = 0;
  ///////////////////////UPDATE SETTING//////////////////////////////////////////
  //Add methods to check if its a string then convert into  a decimal
  var updateCall = function(callSettings){
    if(callSettings !=""){
      callCost= parseFloat(callSettings);
    }
  }
  // add another function to return call cost total
  var returnUpdateCall = function(){
    return callCost;
  }
  var updateSms = function(smsSettings){
    if(smsSettings !="") {
      smsCost = parseFloat(smsSettings);
    }
  }
  // add anpother function to return sms cost total
  var returnUpdateSms = function(){
    return smsCost;
  }
  var updateWarning = function(warningSettings){
    if (warningSettings !=""){
      return warningLevel = parseFloat(warningSettings);
    }
  }
  var updateCritical = function(criticalSettings){
    if(criticalSettings !=""){
      return criticalLevel = parseFloat(criticalSettings);
    }
  }
  ///////////////////////END UPDATE SETTINGS///////////////////////////////////

  ///////////////////////////BILL TYPE////////////////////////////////////////
  // create a variables that will keep track of all three totals.
  var callTotal = 0;
  var smsTotal = 0;
  var totalForAll = 0;
  //Create methods for checking and return calls and sms's amount
  var billTypeCall = function(radioBtnChecked){
    if(radioBtnChecked === "call"){
      callTotal += returnUpdateCall();
    }
  }
  //Add a return function for calls
  var returnCall = function(){
    return callTotal;
  }
  var billTypeSms = function(radioBtnChecked){
    if(radioBtnChecked === "sms"){
      smsTotal += returnUpdateSms();
    }
  }
  //Add a return function for calls
  var returnSms = function(){
    return smsTotal;
  }

  var settingsTotal = function(){
    return totalForAll = callTotal + smsTotal;
  }
  //////////////////////////END BILL TYPE//////////////////////////////////////
  return {
    updateCall,
    returnUpdateCall,
    updateSms,
    returnUpdateSms,
    updateWarning,
    updateCritical,
    ///////////////////////////////////////////////////////////////////////////
    billTypeCall,
    returnCall,
    billTypeSms,
    returnSms,
    settingsTotal
  }
}
// Add an object instance of update element factory function
var newSettingBill = SettingBill();
///////////////////////UPDATE SETTING//////////////////////////////////////////
// get refences to all the settings fields
var callCostElem = document.querySelector(".callCostSetting");
var smsCostElem = document.querySelector(".smsCostSetting");
var warningLevelElem = document.querySelector(".warningLevelSetting");
var criticalLevelElem = document.querySelector(".criticalLevelSetting");
//get a reference to the 'Update settings' button
var updateSettingsElem = document.querySelector(".updateSettings")
//add an event listener for when the 'Update settings' button is pressed
  updateSettingsElem.addEventListener("click", function(){
  //Initialise all variables to keep track of all settings
  var callSettings = callCostElem.value;
  var smsSettings = smsCostElem.value;
  var warningSettings = warningLevelElem.value;
  var criticalSettings = criticalLevelElem.value;
  //Populate methods inside factory function with values
  newSettingBill.updateCall(callSettings);
  newSettingBill.updateSms(smsSettings);
  newSettingBill.updateWarning(warningSettings);
  newSettingBill.updateCritical(criticalSettings);
  //Add a variable to store both warning and critical level
  var warnings = newSettingBill.updateWarning(warningSettings);
  var criticals = newSettingBill.updateCritical(criticalSettings);
  //Restrictions if certain conditions are not methods
   if(newSettingBill.settingsTotal() < warnings){
    totalElem.classList.remove("warning");
   }
   if(newSettingBill.settingsTotal() < criticals){
     totalElem.classList.remove("danger");
     addElem.disabled = false;
   }
});
///////////////////////END UPDATE SETTINGS/////////////////////////////////////

//////////////////////////BILL TYPE////////////////////////////////////////
// get a reference to the sms or call radio buttons
var callTotalElem = document.querySelector(".callTotalSettings");
var smsTotalElem = document.querySelector(".smsTotalSettings");
var totalElem = document.querySelector(".totalSettings");
//get a reference to the add button
var addElem = document.querySelector(".addButton");
//add an event listener for when the add button is pressed
addElem.addEventListener("click", function(){
  //in the event listener get the value from the billItemTypeRadio radio buttons
  var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if(checkedRadioBtn){
    var radioBtnChecked = checkedRadioBtn.value;
  }
  var warningSettings = warningLevelElem.value;
  var criticalSettings = criticalLevelElem.value;
  //Populate call and sms methods with checked radio buttons
  newSettingBill.billTypeCall(radioBtnChecked);
  newSettingBill.billTypeSms(radioBtnChecked);
  //Declare a variable to store total
  var totalAll = newSettingBill.settingsTotal();
  smsTotalElem.innerHTML = newSettingBill.returnSms().toFixed(2);
  callTotalElem.innerHTML = newSettingBill.returnCall().toFixed(2);
  totalAll = newSettingBill.returnCall() + newSettingBill.returnSms();
  totalElem.innerHTML = totalAll.toFixed(2);

  //Add a variable to store both warning and critical level
  var warnings = newSettingBill.updateWarning(warningSettings);
  var criticals = newSettingBill.updateCritical(criticalSettings);
  //Rase restrictions when certain conditions are met......
  if(totalAll >= warnings && totalAll < criticals){
     totalElem.classList.add("warning");
   }
  if(totalAll >= criticals){
    totalElem.classList.add("danger");
    addElem.disabled = true;
  }
});
//////////////////////////END BILL TYPE////////////////////////////////////////
