// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => 
    drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => 
    drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => 
    function(fare) {
        return int * fare
    }

const fareDoubler = (fare) =>
    createFareMultiplier(2)(fare);

const fareTripler = (fare) => 
    createFareMultiplier(3)(fare);

const selectDifferentDrivers = (drivers, func) =>
    func(drivers)