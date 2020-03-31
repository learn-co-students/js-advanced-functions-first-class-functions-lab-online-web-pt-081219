// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
    };
// const returnFirstTwoDrivers = function (array) {
// return array.slice(0, 2)
// }

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2)
    };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// allows us to invoke either function from the array:

const createFareMultiplier = function (value) {
    return function(secondValue) {
        return value * secondValue;
    };
};

const fareDoubler = createFareMultiplier(2)
 const fareTripler = createFareMultiplier(3)

 const selectDifferentDrivers = function (drivers, whichDrivers) {
     return whichDrivers (drivers);
 }