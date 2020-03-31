// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
        return [array[0], array[1]]
};


const returnLastTwoDrivers = function(array){
    return [array[array.length - 2], array[array.length -1]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(fare){
        return fare * int
    }
}

const fareDoubler = function(fare){
    return fare * 2
}

const fareTripler = function(fare){
    return fare * 3 
}

const selectDifferentDrivers = function(drivers, returnDriver) {
    return returnDriver(drivers)
}