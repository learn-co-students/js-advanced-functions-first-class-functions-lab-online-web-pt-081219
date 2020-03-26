const returnFirstTwoDrivers = function(arry) {
    return [arry[0], arry[1]]
}

const returnLastTwoDrivers = function(arry) {
    return [arry[arry.length -2], arry[arry.length -1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
    return function(input=1) {
        return input * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arry, fun) {
    return fun(arry)
}