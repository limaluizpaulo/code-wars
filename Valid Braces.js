const braces = "((())";

const arr = braces.split("");

let awnser = true;

if (braces.length % 2 == 1) {
  awnser = false;
} else {
  for (let counter = parseInt(braces.length / 2); counter > 0; counter--) {
    const firstElement = arr.shift();
    const lastElement = arr.pop();

    if (firstElement == "[") {
      if (lastElement != "]") {
        awnser = false;
      }
    }
    if (firstElement == "(") {
      if (lastElement != ")") {
        awnser = false;
      }
    }
    if (firstElement == "{") {
      if (lastElement != "}") {
        awnser = false;
      }
    }
  }
}

console.log(awnser);
