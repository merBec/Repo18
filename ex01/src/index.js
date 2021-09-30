let myArr = [];

function* multiplication(x) {
  var output = x;
  for (let i = 0; i < x; i++) {
    output = output * 2;
    myArr.push(output);
    yield output;
  }
  return output;
}

var num = multiplication(3);

for (let result of num){
  console.log(num.next().value)
}

module.exports = multiplication;
