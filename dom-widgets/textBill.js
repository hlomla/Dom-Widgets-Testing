function textTotalBill () {
    var callTextTotal = 0;
    var smsTextTotal = 0;
    var theCallText = 0;
    var theSmsText = 0;

    function textBill (billTypeEntered) {
        
        if (billTypeEntered === "call"){
            theCallText += 2.75
        }
        else if (billTypeEntered === "sms"){
            theSmsText += 0.75;
        }
    }
    function billTypeTotal (){
       return callTextTotal + smsTextTotal;
    }
    function callTextTot() {
        return callTextTotal += theCallText;
    }
    function theSmsTextTot () {
       return smsTextTotal += theSmsText;
    }
    function getSmsTotal () {
        return smsTextTotal;
    }
    function getCallTotal (){
        return callTextTotal
    }

    return {
        textBill,
        getSmsTotal,
        callTextTot,
        theSmsTextTot,
        billTypeTotal,
        getCallTotal
    }
}
