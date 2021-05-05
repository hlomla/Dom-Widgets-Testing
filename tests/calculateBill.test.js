describe('Calculate Bill Factory Function', function () {

    describe('Return String', function () {
        it('should be able to take in string with a call', function () {
            let billItems = calculateBill();
            billItems.setCallsMade('call')
            assert.equal('call', billItems.getCallsMade());

            let billItems2 = calculateBill();
            billItems2.setCallsMade('call,call')
            assert.equal('call,call', billItems2.getCallsMade());

        })
        it('should be able to take in string with an sms', function () {
            let billItems = calculateBill();
            billItems.setSmsMade('sms')
            assert.equal('sms', billItems.getSmsMade());

            let billItems2 = calculateBill();
            billItems2.setSmsMade('sms,sms')
            assert.equal('sms,sms', billItems2.getSmsMade());

        });
        it('should be able to take in string with a call and sms', function () {
            let billItems = calculateBill();
            billItems.setSmsMade('sms,sms,sms')
            billItems.setCallsMade('call,call,call')
            assert.equal('sms,sms,sms', billItems.getSmsMade());
            assert.equal('call,call,call', billItems.getCallsMade())

            let billItems2 = calculateBill();
            billItems2.setSmsMade('sms,sms,sms,sms,sms,sms,sms,sms')
            billItems2.setCallsMade('call,call,call,call,call,call,call')
            assert.equal('sms,sms,sms,sms,sms,sms,sms,sms', billItems2.getSmsMade());
            assert.equal('call,call,call,call,call,call,call', billItems2.getCallsMade());
        });
    });
})