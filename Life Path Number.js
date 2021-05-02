var dateOfBirth = "1961-07-04"

var b = dateOfBirth.split('');

var d1 = Number(b[8])
var d2 = Number(b[9])
var m1 = Number(b[5])
var m2 = Number(b[6])
var a1 = Number(b[0])
var a2 = Number(b[1])
var a3 = Number(b[2])
var a4 = Number(b[3])
var y= a1+a2+a3+a4


if(y > 9){
y = String(y)
var ya = y.split('')[0]
var yb = y.split('')[1]
y = Number(ya) + Number(yb)
}

var t1 = m1+m2+d1+d2+y



if(t1 > 9){
    t1 = String(t1)
var t1a = t1.split('')[0]
var t1b = t1.split('')[1]
    var lifenum = Number(t1a) + Number(t1b)

    if(lifenum > 9){
        lifenum = String(lifenum)
    var lna = lifenum.split('')[0]
    var lnb = lifenum.split('')[1]
        var lifenum = Number(lna) + Number(lnb)}

 } else {
    lifenum = t1
 }





console.log(lifenum)

//Number.lifenum.reduce( (accum, curr) => accum + curr );



