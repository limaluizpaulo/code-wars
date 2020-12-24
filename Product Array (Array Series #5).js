const numbers = [3, 4];
const newArr = [];
const prod = numbers.reduce((a, c) => a * c);

function exceptI(element) {
  newArr.push(prod / element);
}
numbers.forEach(exceptI);

return newArr;
