var ratio = "4:3"
var width = 1024


var height = (width / (ratio.split(':')[0]) * (ratio.split(':')[1]));

console.log(width+':'+height)