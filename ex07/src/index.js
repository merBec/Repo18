let numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];

let uniqueNumbersArray = new Set(numberArray);

let uniqueArray = [...uniqueNumbersArray].sort((a, b) => a - b);

console.log(uniqueArray);

module.exports = { numberArray, uniqueArray };
