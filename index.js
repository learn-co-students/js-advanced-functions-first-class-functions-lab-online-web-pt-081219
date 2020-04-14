// Code your solution in this file!
// const Array = {
// function returnFirstTwoDrivers()
// }
const returnFirstTwoDrivers = (array) => {
    return array.slice(0,2)
}

const returnLastTwoDrivers = (array) => {
    return array.slice(-2)
} 

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = (number) => {
    return (value) => {
      return number * value
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

let selectDifferentDrivers = (drivers, selectDriver) => {
    return selectDriver(drivers)
}