numbers = [2, 1, 8, 0, 6, 4, 8, 6, 2, 4];

numbers.sort((a, b) => b - a);

function uniqBy(numbers, key) {
  var seen = {};
  return numbers.filter(function (item) {
    var k = key(item);
    return seen.hasOwnProperty(k) ? false : (seen[k] = true);
  });
}

let uniq = uniqBy(numbers, JSON.stringify);

let sum = 0;

for (let i = 0; i <= 2; i++) {
  sum += uniq[i];
}

console.log(sum);
