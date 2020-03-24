// Code your solution in this file!


const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]]
};

const returnLastTwoDrivers = function(drivers) {
    return [drivers[drivers.length - 2], drivers[drivers.length -1]]
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer
    };
};

const fareDoubler = function(fare) {
    return fare * 2
};

const fareTripler = function(fare) {
    return fare * 3
};

const selectDifferentDrivers = function(drivers, returnDriver) {
    return returnDriver(drivers)
};