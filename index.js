const returnFirstTwoDrivers = (arrayOfDrivers) => {
  return arrayOfDrivers.slice(0,2)
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
  return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier = (multiplyValue) => {
  return (value) => {
    return multiplyValue * value
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, whichDriver) => {
  return whichDriver(drivers)
}

console.log("Hi there!")