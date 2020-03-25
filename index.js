// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiply) {
  return function(fare) {
    return multiply * fare
  }
}

const fareDoubler = function(fare) {
  return fare * 2
}

const fareTripler = function(fare) {
  return fare * 3
}

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers)
}
