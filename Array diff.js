const a = [-11, 18, -18, -9, -3];
const b = [-11, -3];

if (b[0] == undefined) {
  b[0] = -1000;
}

let novo = [];
for (const j in a) {
  for (const i in b) {
    if (a[j] != b[i]) {
      novo.push(a[j]);
    }
  }
}

console.log(novo);
