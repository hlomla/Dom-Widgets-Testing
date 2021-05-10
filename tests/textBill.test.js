describe('Text Bill Input Factory Function', function () {

    describe('Return a value from a text value', function () {
        it('when sms is entered should return sms cost', function () {
            let billTypeE = textTotalBill();

            billTypeE.textBill('sms')
            billTypeE.textBill('call')


            billTypeE.theSmsTextTot();


            assert.equal(0.75, billTypeE.billTypeTotal());
            assert.equal(0.75, billTypeE.getSmsTotal());
            assert.equal(0.00, billTypeE.getCallTotal());

            let billTypeE2 = textTotalBill();

            billTypeE2.textBill('sms')
            billTypeE2.textBill('call')


            billTypeE2.theSmsTextTot();
            billTypeE2.theSmsTextTot();
            billTypeE2.theSmsTextTot();


            assert.equal(2.25, billTypeE2.billTypeTotal());
            assert.equal(2.25, billTypeE2.getSmsTotal());
            assert.equal(0.00, billTypeE2.getCallTotal());


        });
        it('when call is entered should return call cost', function () {
            let billTypeE = textTotalBill();

            billTypeE.textBill('sms')
            billTypeE.textBill('call')


            billTypeE.callTextTot();


            assert.equal(2.75, billTypeE.billTypeTotal());
            assert.equal(0.00, billTypeE.getSmsTotal());
            assert.equal(2.75, billTypeE.getCallTotal());

            let billTypeE2 = textTotalBill();

            billTypeE2.textBill('sms')
            billTypeE2.textBill('call')


            billTypeE2.callTextTot();
            billTypeE2.callTextTot();
            billTypeE2.callTextTot();
            billTypeE2.callTextTot();
            billTypeE2.callTextTot();


            assert.equal(13.75, billTypeE2.billTypeTotal());
            assert.equal(0.00, billTypeE2.getSmsTotal());
            assert.equal(13.75, billTypeE2.getCallTotal());


        });
        it('when both a "sms" and "call" is entered should return the total cost', function () {
            let billTypeE = textTotalBill();

            billTypeE.textBill('sms')
            billTypeE.textBill('call')


            billTypeE.callTextTot();
            billTypeE.callTextTot();
            billTypeE.callTextTot();
            billTypeE.callTextTot();
            billTypeE.theSmsTextTot();
            billTypeE.theSmsTextTot();
            billTypeE.theSmsTextTot();


            assert.equal(13.25, billTypeE.billTypeTotal());
            assert.equal(2.25, billTypeE.getSmsTotal());
            assert.equal(11.00, billTypeE.getCallTotal());

            let billTypeE2 = textTotalBill();

            billTypeE2.textBill('sms')
            billTypeE2.textBill('call')


            billTypeE2.callTextTot();
            billTypeE2.callTextTot();
            billTypeE2.callTextTot();
            billTypeE2.theSmsTextTot();
            billTypeE2.theSmsTextTot();



            assert.equal(9.75, billTypeE2.billTypeTotal());
            assert.equal(1.50, billTypeE2.getSmsTotal());
            assert.equal(8.25, billTypeE2.getCallTotal());

        });
        describe('Warning and Critical Level', function () {
            it('should be able to return warning level when it gets R30', function () {
                let billTypeE = textTotalBill();
                billTypeE.textBill('call,sms,sms,sms,sms,sms,sms,call,call,call,call,call,call,sms,sms,sms,sms,sms,sms,call,call,call,call,call')

                billTypeE.warningReached(30)
                assert.equal(30, billTypeE.getWarning());


            })
            it('should be able to return critical level when it gets R50', function () {
                let billTypeE = textTotalBill();
                billTypeE.textBill('call,sms,sms,sms,sms,sms,sms,call,call,call,call,call,call,sms,sms,sms,call,call,call,call,call,call,sms,sms,sms,call,sms,sms,sms,sms,sms,sms,call,call,call,call,call,call,sms,sms,sms,sms,sms,sms,call,call,call,call,call')

                billTypeE.criticalReached(50)
                assert.equal(50, billTypeE.getCritical());


            })
        });
        describe('Return Class name for "warning" and "critical" when level reached', function () {
            it('should return a class name of "warning" when warning level is reached', function () {
                let billTypeE = textTotalBill();

                billTypeE.warningReached(30.00)
                billTypeE.criticalReached(50.00)
                billTypeE.textBill('call')
                billTypeE.textBill('sms')

                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
    
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()

                assert.equal('warning', billTypeE.getWarnClassName())
                assert.equal(32.25, billTypeE.billTypeTotal())
            });
            it('should return a class name of "critical" when critical level is reached', function () {
                let billTypeE = textTotalBill();

                billTypeE.criticalReached(50.00)
                billTypeE.warningReached(30.00)

                billTypeE.textBill('call')
                billTypeE.textBill('sms')

                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.callTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()
                billTypeE.theSmsTextTot()

                assert.equal('critical', billTypeE.totalClassName())
                assert.equal(58.00, billTypeE.billTypeTotal())
            });
        })
    });
})