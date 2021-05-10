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
            describe('Return Class name for "warning" and "critical" when level reached', function () {
                it('should return a class name of "warning" when warning level is reached', function () {
                    let billItems = calculateBill();

                    billItems.warningLevelReached(20.00)
                    billItems.criticalLevelReached(30.00)

                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('sms')
                    billItems.billString('sms')
                    billItems.billString('sms')



                    assert.equal('warning', billItems.getWarningName())
                    assert.equal(21.50, billItems.getTotal())
                });
                it('should return a class name of "critical" when critical level is reached', function () {
                    let billItems = calculateBill();

                    billItems.criticalLevelReached(30.00)
                    billItems.warningLevelReached(20.00)


                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('call')
                    billItems.billString('sms')
                    billItems.billString('sms')
                    billItems.billString('sms')
                    billItems.billString('sms')
                    billItems.billString('sms')



                    assert.equal('critical', billItems.critClassName())
                    assert.equal(31.25, billItems.getTotal())
                });
            });
        });
    })
})