// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = (array) => {
    return [array[0], array[1]]
}

const returnLastTwoDrivers = (array) => {
    return array.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multi){
    return function(x) { return multi * x };
}

const fareDoubler = (x) => {
    return createFareMultiplier(2)(x)
}

const fareTripler = (x) => {
    return createFareMultiplier(3)(x)
}

function selectDifferentDrivers(array, fn) {
    return fn(array);
}