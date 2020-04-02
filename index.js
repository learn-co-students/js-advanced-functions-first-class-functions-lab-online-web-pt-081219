const returnFirstTwoDrivers = arrayOfDrivers => {
  // return arrayOfDrivers.slice(0, 2);

  return [arrayOfDrivers[0], arrayOfDrivers[1]];

  // let newArray = [];

  // newArray.push(arrayOfDrivers[0], arrayOfDrivers[1]);
  // return newArray;
};

const returnLastTwoDrivers = arrayOfDrivers => {
  return arrayOfDrivers.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return fare => {
    return integer * fare;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, choiceOfFunctions) {
  return choiceOfFunctions(driversArray);
}
