describe('Bill with settings Factory Function', function(){
    it('should be able to set call amount', function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(1.50)
        assert.equal(1.50, settingsBill.getCallCost());

        let settingsBillTwo = BillWithSettings();
        settingsBillTwo.setCallCost(2.75)
        assert.equal(2.75, settingsBillTwo.getCallCost());
    });
    it('should be able to set sms amount', function(){
        let settingsBill = BillWithSettings();
        settingsBill.setSmsCost(0.50)
        assert.equal(0.50, settingsBill.getSmsCost());

        let settingsBillTwo = BillWithSettings();
        settingsBillTwo.setSmsCost(0.85)
        assert.equal(0.85, settingsBillTwo.getSmsCost());
    });
    it('should be able to set sms and call amount', function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.75)
        settingsBill.setSmsCost(0.85)

        assert.equal(2.75, settingsBill.getCallCost());
        assert.equal(0.85, settingsBill.getSmsCost())

        let settingsBillTwo = BillWithSettings();

        settingsBillTwo.setCallCost(3.00)
        settingsBillTwo.setSmsCost(0.90)

        assert.equal(3.00, settingsBillTwo.getCallCost());
        assert.equal(0.90, settingsBillTwo.getSmsCost())
    });
    it('should be able to set warning level', function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(20.00)

        assert.equal(20.00, settingsBill.getWarningLevel());
       
    })
})