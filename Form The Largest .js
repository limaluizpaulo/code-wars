n = 1234
texto = String(n)
var [...obj] = texto
n = String(obj.sort((a,b) => b - a))
   var concatenado = 1

for(var index = 0;index <= ((n.length-1));index++){

    if(index % 2 == 0){
   concatenado += n[index]
    }
}

n = Number(concatenado.slice(1,concatenado.length))



console.log(n)



/* uma solucao melhor

function maxNumber(n){
    return Number(String(n).split("").sort().reverse().join(""));
  }*/ 