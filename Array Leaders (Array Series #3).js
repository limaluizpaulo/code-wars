let numbers = [490, 270]

numbers.push[0]

var novo = []


for (var j = 0;j < numbers.length+2;j++){ 

var test = numbers.shift()
var total = 0;

for ( var i = 0; i < numbers.length; i++ ){
   total += numbers[i] || 0;
   
}

if(test >= total) {
    novo.push(test)
    }


}

if(numbers[numbers.length-1] > 0) {  novo.push(numbers[numbers.length-1]) }

console.log(novo)








/*
numbers.filter()

let sum = () => {
    (t, a) => accumulator + currentValue
}


const soma = (total, valor) => total + valor

numbers.reduce(soma, 21))*/





