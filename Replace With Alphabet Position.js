function alphabetPosition(text) {
  text.split(" ").join("");
  var chari = "";
  var arr = [];
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (var i = 0; i < text.length; i++) {
    chari = text.charAt(i).toLowerCase();
    if (alphabet.indexOf(chari) > -1) {
      arr.push(alphabet.indexOf(chari));
    }
  }
  return arr.join(" ");
}
console.log(alphabetPosition("Hello World"));
