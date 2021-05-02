let numbers = [16,17,4,3,5,2]

let numbers2 = numbers.map((e) => {return e} )

let soma = []

for (var j = 0;j < numbers.length+3;j++){ 
numbers.shift()
var total = 0;

for ( var i = 0; i < numbers.length; i++ ){
    total += Number(numbers[i])
 }
soma.push(total)
}

soma.push(0)

console.log(soma,numbers2)
 
let novo = [] 

for (x in numbers2){

    if(numbers2[x] > soma[x]) {
        novo.push(numbers2[x])
        }

}

return novo













/*


numbers.filter()

let sum = () => {
    (t, a) => accumulator + currentValue
}


const soma = (total, valor) => total + valor

numbers.reduce(soma, 21))*/






