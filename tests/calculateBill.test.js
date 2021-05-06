describe('Calculate Bill Factory Function', function () {

    describe('Return a value from a string', function () {
        it('should be able to take in string with a call and return amount', function () {
            let billItems = calculateBill();
            billItems.billString('call')
            assert.equal(2.75, billItems.getTotal());

            let billItems2 = calculateBill();
            billItems2.billString('call,call')
            assert.equal(5.50, billItems2.getTotal());

        })

        it('should be able to take in string with a sms and return amount', function () {
            let billItems = calculateBill();
            billItems.billString('sms')
            assert.equal(0.75, billItems.getTotal());

            let billItems2 = calculateBill();
            billItems2.billString('sms,sms,sms,sms')
            assert.equal(3.00, billItems2.getTotal());

        });
        it('should be able to take in string with a sms and a call and return amount value', function () {
            let billItems = calculateBill();
            billItems.billString('sms,call')
            assert.equal(3.50, billItems.getTotal());

            let billItems2 = calculateBill();
            billItems2.billString('sms,call,sms,call,sms,call,sms,call,call,call')
            assert.equal(19.50, billItems2.getTotal());

        });
        it('should be able to return the warning level', function () {
            let billItems = calculateBill();
            billItems.warningLevelReached(20)
            assert.equal(20, billItems.getwarningLevel());


        });
        it('should be able to set the critical level', function () {
            let billItems = calculateBill();
            billItems.criticalLevelReached(30)
            assert.equal(30, billItems.getCriticalLevel());


        });

        describe('Warning and Critical Level', function () {
            it('should be able to return warning level when it gets R20', function () {
                let billItems = calculateBill();
                billItems.billString('call,sms,sms,sms,sms,sms,sms,call,call,call,call,call')
                
                billItems.warningLevelReached(20)            
                assert.equal(20, billItems.getwarningLevel());


            })
            it('should be able to return critical level when it gets R30', function () {
                let billItems = calculateBill();
                billItems.billString('call,sms,sms,sms,sms,sms,sms,call,call,call,call,call,call,sms,sms,sms,call,call,call,call,call,call,sms,sms,sms')
                
                billItems.criticalLevelReached(30)            
                assert.equal(30, billItems.getCriticalLevel());


            })

            // it('should return a class name of "warning" once warning level is reached', function () {
            //     let settingsBill = BillWithSettings();

            //     settingsBill.setCallCost(2.50)
            //     settingsBill.setSmsCost(0.50)
            //     settingsBill.setWarningLevel(10)
            //     settingsBill.setCriticalLevel(15)

            //     settingsBill.makeCall()
            //     settingsBill.makeCall()
            //     settingsBill.makeCall()
            //     settingsBill.sendSms()
            //     settingsBill.sendSms()
            //     settingsBill.sendSms()
            //     settingsBill.sendSms()
            //     settingsBill.sendSms()

            //     assert.equal('warning', settingsBill.getWarningLevelClassName())
            // })
        });
    });
})