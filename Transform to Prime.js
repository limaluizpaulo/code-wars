let numbers = [2, 12, 8, 4, 6];

function IsPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return num !== 1;
}

let sum = numbers.reduce((a, b) => a + b);
let x = 0;

while (!IsPrime(sum + x)) {
  x++;
}

console.log(x);
