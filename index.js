// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2)
  };

  const returnLastTwoDrivers = (drivers) => {
    let last = drivers.length
    let start = last - 2
    return drivers.slice(start, last)
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (n) => {
  return (fare) => n * fare
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, func) => {
  return func(drivers);
}
