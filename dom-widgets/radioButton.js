function radioBtnBill() {
    var radioCallTotal = 0;
    var radioSmsTotal = 0;
    var callTotalTwo = 0;
    var smsTotalTwo = 0;

    var warnLevelValue = 30;
    var critLevelValue = 50;

    function radioBillTotal(billItemTypeTwo) {
        if (billItemTypeTwo === "call") {
            callTotalTwo += 2.75
        }
        else if (billItemTypeTwo === "sms") {
            smsTotalTwo += 0.75;
        }
    }
    function radioTotal() {
        return radioCallTotal + radioSmsTotal;
    }
    function smsRadioTotal() {
        if (!critValueReached()) {
            return radioSmsTotal += smsTotalTwo;
        }
    }
    function getSmsRadioTot() {
        return radioSmsTotal
    }
    function callRadioTotal() {
        if (!critValueReached()) {
            return radioCallTotal += callTotalTwo;
        }
    }
    function getCallRadioTot() {
        return radioCallTotal
    }
    function warnReached(warningValue) {
        warnLevelValue = warningValue
    }
    function getWarningValue() {
        return warnLevelValue
    }
    function critReached(criticalValue) {
        critLevelValue = criticalValue
    }
    function getCriticalValue() {
        return critLevelValue
    }
    function critValueReached() {
        radioTotal() >= getCriticalValue()
    }
    function criticalClassName() {

        if (radioTotal() >= 50) {
            return "critical"
        }
    }

    function warningClassName() {
        if (radioTotal() >= 30) {
            return "warning"
        }
    }
    return {
        radioBillTotal,
        radioTotal,
        smsRadioTotal,
        getSmsRadioTot,
        getCallRadioTot,
        callRadioTotal,
        warnReached,
        getWarningValue,
        critReached,
        getCriticalValue,
        critValueReached,
        criticalClassName,
        warningClassName
    }
}