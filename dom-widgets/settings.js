function BillWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;
    
    function setCallCost(callCost){
        theCallCost = callCost;
    }
    function getCallCost(){
        return theCallCost
    }
    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }
    function getSmsCost(){
        return theSmsCost
    }
    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel
    }
    function getWarningLevel(){
        return theWarningLevel
    }
    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel
    }
    function getCriticalLevel(){
        return theCriticalLevel
    }
    function makeCall(){
        if (!criticalLevelReached()) {
            callCostTotal += theCallCost;        }
    } 
    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }
    function getTotalCallCost() {
         return callCostTotal;
    }
    function getTotalSmsCost(){
        return smsCostTotal ;
    }
    function sendSms () {
        if (!criticalLevelReached()) {
            smsCostTotal += theSmsCost
        }
    }
    function criticalLevelReached (){
        getTotalCost() >= getCriticalLevel()
    }
    function totalClassName () {
        // console.log(getTotalCost());
        // if (getTotalCost() >= getWarningLevel()) {
        //     return "warning"
        // }

       if ( getTotalCost() >= getCriticalLevel()) {
            return "critical"
        }
    }

    function getWarningLevelClassName () {
        if (getTotalCost() >= getWarningLevel()) {
            return "warning"
        }
    }

    return {
    setCallCost,
    getCallCost,
    setSmsCost,
    getSmsCost,
    setWarningLevel,
    getWarningLevel,
    setCriticalLevel,
    getCriticalLevel,
    makeCall,
    getTotalCost,
    getTotalCallCost,
    getTotalSmsCost,
    sendSms,
    totalClassName,
    getWarningLevelClassName
}
}