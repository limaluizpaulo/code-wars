let numbers = [8, 9, 10, 4, 2];
let value = 23;
let arr = [];
let sum = 0;
let x = 0;

numbers.sort((a, b) => a - b);

for (let i in numbers) {
  sum += numbers[i];
  arr.push(sum);
}

return arr.findIndex((a) => a >= value);
