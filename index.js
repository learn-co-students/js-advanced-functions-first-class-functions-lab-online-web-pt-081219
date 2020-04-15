// Code your solution in this file!

function returnFirstTwoDrivers(drivers){
    const x = function(){return drivers.slice(0,2)};
    return x()  
}

function returnLastTwoDrivers(drivers){
    const last = drivers.length-1
    const x = function(){return drivers.slice(last-1)};
    return x()
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    const x = function(fare){
       let price = fare * integer
       return price
    }
    return x
}

function fareDoubler(fare){
    const y = createFareMultiplier(2)(fare)
    return y
}

function fareTripler(fare){
    const z = createFareMultiplier(3)(fare)
    return z
}

function selectDifferentDrivers(arrayOfDrivers, f) {
    if (f === selectingDrivers[0]){
        return selectingDrivers[0](arrayOfDrivers)
    } else {
        return selectingDrivers[1](arrayOfDrivers)
    }

}