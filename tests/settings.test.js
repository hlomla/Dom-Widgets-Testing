describe('Bill with settings Factory Function', function () {

    describe('Setting Values', function () {
        it('should be able to set call amount', function () {
            let settingsBill = BillWithSettings();
            settingsBill.setCallCost(1.50)
            assert.equal(1.50, settingsBill.getCallCost());

            let settingsBillTwo = BillWithSettings();
            settingsBillTwo.setCallCost(2.75)
            assert.equal(2.75, settingsBillTwo.getCallCost());
        });
        it('should be able to set sms amount', function () {
            let settingsBill = BillWithSettings();
            settingsBill.setSmsCost(0.50)
            assert.equal(0.50, settingsBill.getSmsCost());

            let settingsBillTwo = BillWithSettings();
            settingsBillTwo.setSmsCost(0.85)
            assert.equal(0.85, settingsBillTwo.getSmsCost());
        });
        it('should be able to set sms and call amount', function () {
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
        it('should be able to set warning level', function () {
            let settingsBill = BillWithSettings();

            settingsBill.setWarningLevel(20.00)

            assert.equal(20.00, settingsBill.getWarningLevel());

            let settingsBillTwo = BillWithSettings();

            settingsBillTwo.setWarningLevel(30.00)

            assert.equal(30.00, settingsBillTwo.getWarningLevel());

        });
        it('should be able to set critical level', function () {
            let settingsBill = BillWithSettings();

            settingsBill.setCriticalLevel(35.00)

            assert.equal(35.00, settingsBill.getCriticalLevel());

            let settingsBillTwo = BillWithSettings();

            settingsBillTwo.setCriticalLevel(45.00)

            assert.equal(45.00, settingsBillTwo.getCriticalLevel());

        });

    })



    describe('Using Values', function () {
        it('should be able to use call cost amount', function () {
            let settingsBill = BillWithSettings();
            settingsBill.setCallCost(2.50)
            settingsBill.setSmsCost(0.50)
            settingsBill.setCriticalLevel(20)


            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()

            assert.equal(10.00, settingsBill.getTotalCost());
            assert.equal(10.00, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());

        });
        it('should be able to use 2 calls at R1.50 ', function () {
            let settingsBill = BillWithSettings();
            settingsBill.setCallCost(1.50)
            settingsBill.setSmsCost(0.95)
            settingsBill.setCriticalLevel(20)


            settingsBill.makeCall()
            settingsBill.makeCall()

            assert.equal(3.00, settingsBill.getTotalCost());
            assert.equal(3.00, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());

        });
        it('should be able to use 3 sms at R1.50 ', function () {
            let settingsBill = BillWithSettings();
            settingsBill.setCallCost(1.50)
            settingsBill.setSmsCost(0.95)
            settingsBill.setCriticalLevel(20)


            settingsBill.sendSms()
            settingsBill.sendSms()

            assert.equal(1.90, settingsBill.getTotalCost());
            assert.equal(0.00, settingsBill.getTotalCallCost());
            assert.equal(1.90, settingsBill.getTotalSmsCost());

        });
        it('should be able to use 2 calls and 3 sms cost amount', function () {
            let settingsBill = BillWithSettings();
            settingsBill.setCallCost(2.50)
            settingsBill.setSmsCost(0.50)
            settingsBill.setCriticalLevel(20)


            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.sendSms()
            settingsBill.sendSms()
            settingsBill.sendSms()

            assert.equal(6.50, settingsBill.getTotalCost());
            assert.equal(5.00, settingsBill.getTotalCallCost());
            assert.equal(1.50, settingsBill.getTotalSmsCost());

        });
    })
    describe('warning & critical level', function () {
        it('should return a class name of "warning" once warning level is reached', function () {
            let settingsBill = BillWithSettings();

            settingsBill.setCallCost(2.50)
            settingsBill.setSmsCost(0.50)
            settingsBill.setWarningLevel(10)
            settingsBill.setCriticalLevel(15)

            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.sendSms()
            settingsBill.sendSms()
            settingsBill.sendSms()
            settingsBill.sendSms()
            settingsBill.sendSms()

            assert.equal('warning', settingsBill.getWarningLevelClassName())
        })
        it('should return a class name of "critical" once critical level is reached', function () {
            let settingsBill = BillWithSettings();

            settingsBill.setCallCost(2.50)
            settingsBill.setSmsCost(0.50)
            settingsBill.setCriticalLevel(15)
            settingsBill.setWarningLevel(10)


            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()

            assert.equal('critical', settingsBill.totalClassName())
        })
        it('should stop increasing call total once critical level is reached', function () {
            let settingsBill = BillWithSettings();

            settingsBill.setCallCost(2.50)
            settingsBill.setSmsCost(0.50)
            settingsBill.setCriticalLevel(20)

            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()
            settingsBill.makeCall()

            assert.equal('critical', settingsBill.totalClassName())
            assert.equal(20, settingsBill.getTotalCallCost())
        })
        
    })
})
