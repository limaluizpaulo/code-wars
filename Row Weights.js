const array = [39, 84, 74, 18, 59, 72, 35, 61];

let teamOne = [];
let teamTwo = [];
let totalWeigth = [];

for (const i in array) {
  if (i % 2 == 0) {
    teamOne.push(array[i]);
  } else {
    teamTwo.push(array[i]);
  }
}

totalWeigth.push(
  teamOne.reduce((a, b) => a + b),
  teamTwo.reduce((a, b) => a + b)
);

console.log(totalWeigth);
