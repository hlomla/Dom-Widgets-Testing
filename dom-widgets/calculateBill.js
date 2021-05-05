function calculateBill() {
    var callsMadeTotal = 0;
    var smsMadeTotal = 0

function setCallsMade(callsTotal) {
    callsMadeTotal = callsTotal;
}
function getCallsMade() {
    return callsMadeTotal
}
function billString () {
    if(billItems === 'call') {
        callsMadeTotal += 2.75;
    } else if (billItems === 'sms') {
        smsMadeTotal += 0.75
    }
}
function setSmsMade (smsTotal) {
    smsMadeTotal = smsTotal
}
function getSmsMade () {
    return smsMadeTotal
}

return {
    setCallsMade,
    getCallsMade,
    billString,
    setSmsMade,
    getSmsMade
}
}



