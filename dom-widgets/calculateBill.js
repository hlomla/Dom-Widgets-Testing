function calculateBill() {
    var billTotal = 0;
    var warningLevelSet = 20;
    var criticalLevelSet = 30;

    function billString(totalBill) {
        var billItems = totalBill.split(",");

        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                billTotal += 2.75;
            }
            else if (billItem === "sms") {
                billTotal += 0.75;
            }
        }
    }
    function getTotal() {
        return billTotal
    }
    function warningLevelReached(warningLevel) {
        warningLevelSet = warningLevel
    }
    function getwarningLevel() {
        return warningLevelSet
    }
    function criticalLevelReached(criticalLevel) {
        criticalLevelSet = criticalLevel
    }
    function getCriticalLevel() {
        return criticalLevelSet
    }
    function critLevel() {
        getTotal() >= getCriticalLevel()
    }
    function critClassName() {

        if (getTotal() >= 30) {
            return "critical"
        }
    }

    function getWarningName() {
        if (getTotal() >= 20) {
            return "warning"
        }
    }

    return {
        billString,
        getTotal,
        warningLevelReached,
        getwarningLevel,
        criticalLevelReached,
        getCriticalLevel,
        critLevel,
        critClassName,
        getWarningName
    }
}



