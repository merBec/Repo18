let shoppingList = new Map();

shoppingList.set("Banana", 3);
shoppingList.set("Pineapple", 5);
shoppingList.set("Pear", 2);
shoppingList.set("Carrot", 10);
shoppingList.set("Apple", 1.5);

let arrKey = [];
for (let groc of shoppingList.entries()) {
  arrKey.push(groc[0]);
  console.log(`groceries: ${groc[0]}`);
}

let arrValue = [];
for (let values of shoppingList.entries()) {
  arrValue.push(values[1]);
  console.log(`amount: ${values[1]}`);
}

for (let keyValues of shoppingList.entries()) {
  console.log(`['${keyValues[0]}', ${keyValues[1]}]`);
}

module.exports = { shoppingList, arrKey, arrValue };
