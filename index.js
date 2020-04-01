// Code your solution in this file!
function returnFirstTwoDrivers(array){
    return array.slice(0,2);
}

function returnLastTwoDrivers(array){
    return array.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(x){
        return x * num;
    }
}

function fareDoubler(fare){
    return fare * 2;
}

function fareTripler(fare){
    return fare*3;
}

function selectDifferentDrivers(drivers, thing){
    return thing(drivers)
}