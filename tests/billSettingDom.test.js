describe('Bill With Settings Widget Tests', function(){
  it('should return call cost', function(){
    var newSettingBill = SettingBill();
    newSettingBill.updateCall(1)
    assert.equal('1', newSettingBill.returnUpdateCall());
  });
  it('should return sms cost', function(){
    var newSettingBill = SettingBill();
    newSettingBill.updateSms(1);
    assert.equal('1', newSettingBill.returnUpdateSms());
  });

  it('should return call total if call radio button is checked and update total', function(){
    var newBillSettings = SettingBill();
    newBillSettings.billTypeSms('call');
    assert.equal(newSettingBill.returnUpdateCall(), newBillSettings.returnCall());
  });
  it('should return sms total if sms radio button is checked and update total', function(){
    var newBillSettings = SettingBill();
    newBillSettings.billTypeSms('sms');
    assert.equal(newSettingBill.returnUpdateSms(), newBillSettings.returnSms());
  });
  it('should return calls and sms total amount', function(){
    var newBillSettings = SettingBill();
    newBillSettings.billTypeCall('call');
    newBillSettings.billTypeSms('sms');
    assert.equal('', newBillSettings.settingsTotal());
  });
  it('should return nothing if both radio buttons are not checked');
});
