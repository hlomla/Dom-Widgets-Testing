describe('Radio Button Factory Function', function () {

    describe('When radio button clicked should add value', function () {
        it('when sms is added should return sms cost', function () {
            let radioBillE = radioBtnBill();

            radioBillE.radioBillTotal('call')
            radioBillE.radioBillTotal('sms')

            radioBillE.smsRadioTotal();

            assert.equal(0.75, radioBillE.radioTotal());
            assert.equal(0.75, radioBillE.getSmsRadioTot());
            assert.equal(0.00, radioBillE.getCallRadioTot());

            let radioBillE2 = radioBtnBill();

            radioBillE2.radioBillTotal('call')
            radioBillE2.radioBillTotal('sms')



            radioBillE2.smsRadioTotal();
            radioBillE2.smsRadioTotal();
            radioBillE2.smsRadioTotal();


            assert.equal(2.25, radioBillE2.radioTotal());
            assert.equal(2.25, radioBillE2.getSmsRadioTot());
            assert.equal(0.00, radioBillE2.getCallRadioTot());

        });
        it('when call is added should return call cost value', function () {
            let radioBillE = radioBtnBill();

            radioBillE.radioBillTotal('call')
            radioBillE.radioBillTotal('sms')

            radioBillE.callRadioTotal();
            radioBillE.callRadioTotal();

            assert.equal(5.50, radioBillE.radioTotal());
            assert.equal(0.00, radioBillE.getSmsRadioTot());
            assert.equal(5.50, radioBillE.getCallRadioTot());

            let radioBillE2 = radioBtnBill();

            radioBillE2.radioBillTotal('call')
            radioBillE2.radioBillTotal('sms')



            radioBillE2.callRadioTotal();
            radioBillE2.callRadioTotal();
            radioBillE2.callRadioTotal();
            radioBillE2.callRadioTotal();


            assert.equal(11.00, radioBillE2.radioTotal());
            assert.equal(0.00, radioBillE2.getSmsRadioTot());
            assert.equal(11.00, radioBillE2.getCallRadioTot());
        });
        it('when calls and sms is added should return both the cost value for sms and calls', function () {
            let radioBillE = radioBtnBill();

            radioBillE.radioBillTotal('call')
            radioBillE.radioBillTotal('sms')

            radioBillE.callRadioTotal();
            radioBillE.callRadioTotal();
            radioBillE.smsRadioTotal();
            radioBillE.smsRadioTotal();
            radioBillE.smsRadioTotal();


            assert.equal(7.75, radioBillE.radioTotal());
            assert.equal(2.25, radioBillE.getSmsRadioTot());
            assert.equal(5.50, radioBillE.getCallRadioTot());

            let radioBillE2 = radioBtnBill();

            radioBillE2.radioBillTotal('call')
            radioBillE2.radioBillTotal('sms')



            radioBillE2.callRadioTotal();
            radioBillE2.callRadioTotal();
            radioBillE2.callRadioTotal();
            radioBillE2.callRadioTotal();
            radioBillE2.smsRadioTotal();
            radioBillE2.smsRadioTotal();


            assert.equal(12.50, radioBillE2.radioTotal());
            assert.equal(1.50, radioBillE2.getSmsRadioTot());
            assert.equal(11.00, radioBillE2.getCallRadioTot());
        });
        describe('Warning and Critical Level', function () {
            it('should be able to return warning level when it gets R30', function () {
                let radioBillE = radioBtnBill();
                radioBillE.radioBillTotal('call,sms,sms,sms,sms,sms,sms,call,call,call,call,call,call,sms,sms,sms,sms,sms,sms,call,call,call,call,call')

                radioBillE.warnReached(30)
                assert.equal(30, radioBillE.getWarningValue());


            })
            it('should be able to return critical level when it gets R50', function () {
                let radioBillE = radioBtnBill();
                radioBillE.radioBillTotal('call,sms,sms,sms,sms,sms,sms,call,call,call,call,call,call,sms,sms,sms,call,call,call,call,call,call,sms,sms,sms,call,sms,sms,sms,sms,sms,sms,call,call,call,call,call,call,sms,sms,sms,sms,sms,sms,call,call,call,call,call')

                radioBillE.critReached(50)
                assert.equal(50, radioBillE.getCriticalValue());
            })
            describe('Return Class name for "warning" and "critical" when level reached', function () {
                it('should return a class name of "warning" when warning level is reached', function () {
                    let radioBillE = radioBtnBill();

                    radioBillE.warnReached(30.00)
                    radioBillE.critReached(50.00)
                    radioBillE.radioBillTotal('call')
                    radioBillE.radioBillTotal('sms')

                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()

                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()

                    assert.equal('warning', radioBillE.warningClassName())
                    assert.equal(32.25, radioBillE.radioTotal())
                });
                it('should return a class name of "critical" when critical level is reached', function () {
                    let radioBillE = radioBtnBill();

                    radioBillE.critReached(50.00)
                    radioBillE.warnReached(30.00)

                    radioBillE.radioBillTotal('call')
                    radioBillE.radioBillTotal('sms')

                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.callRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()
                    radioBillE.smsRadioTotal()

                    assert.equal('critical', radioBillE.criticalClassName())
                    assert.equal(58.00, radioBillE.radioTotal())
                });
            });
        });
    })
});