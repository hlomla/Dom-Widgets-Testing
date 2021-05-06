describe('Text Bill Input Factory Function', function () {

    describe('Return a value from a string', function () {
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
    });
})