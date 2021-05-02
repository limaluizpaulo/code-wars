function getRandom(min = 1, max = 12) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let month = getRandom()


switch(month) {
    case 1: case 2: case 3:
        return 1
    case 4: case 5: case 6:
        return 2
    case 7: case 8: case 9:
        return 3
    case 10: case 11: case 12:
        return 4
    break
}