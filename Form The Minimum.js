const values = [1, 9, 1, 3, 7, 4, 6, 6, 7];

function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b);
}

var array_soma = removeDuplicates(values).sort((a, b) => a - b);

const res = [];
array_soma.forEach((el, idx) =>
  res.push(idx === 0 ? el : res[res.length - 1] + "" + el)
);

console.log(typeof Number(res[res.length - 1]));
