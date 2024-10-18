/** Primitives */
const score = 10;
const bigAmount = BigInt(1234567890123456789012345678901234567890);
const drink = "Milk";
const stillAlive = true;
let unknownValue;
const zero = null;
const uniqueID = Symbol("Something special");

/** Objects */
let character = {
  nickName: 'Milklizard',
  lvl: 85,
  class: 'Hunter',
  mainStats: {
    str: 10,
    agi: 4500,
    stam: 4000,
    int: 10,
  }
};

function returnTypeOfDifferentData(...constNames) {
  constNames.forEach(constName => {
    console.log(`Const type: ` + typeof constName);
  });
}

returnTypeOfDifferentData(score, bigAmount, drink, stillAlive, unknownValue, zero, uniqueID, character);