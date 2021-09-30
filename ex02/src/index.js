var x = [];
function* myGenerator() {
  function* insideGenerator1() {
    for (var i = 1; i <= 5; i++) {
      x.push(i);
      yield i;
    }
  }

  function* insideGenerator2() {
    for (var i = 10; i <= 15; i++) {
      x.push(i);
      yield i;
    }
  }

  function* insideGenerator3() {
    for (var i = 6; i <= 9; i++) {
      x.push(i);
      yield i;
    }
  }

  yield* insideGenerator1();
  yield* insideGenerator2();
  yield* insideGenerator3();
}

const iterator = myGenerator();

let fifteenArray = [];

var value = 0;
for (var i = 0; value !== undefined; i++) {
  value = iterator.next().value;
  fifteenArray.push(value);
}

fifteenArray = fifteenArray
  .map((num) => {
    return num === undefined ? num + "!" : num + "#";
  })
  .join(", ");

console.log(fifteenArray);

module.exports = { fifteenArray, myGenerator };
