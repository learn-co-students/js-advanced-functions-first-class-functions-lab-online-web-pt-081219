const returnFirstTwoDrivers = function(drivers) {return drivers.slice(0,2)};
const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multi) {
  return function(fare) {return fare * multi}
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers)
}