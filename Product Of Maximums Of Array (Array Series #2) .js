  var numbers = [4,3,5]
  var size = 2
  
  var total = 1 // para a primeira multiplicacao ficar ok
  numbers.sort((a,b) => a - b) // ordenando os numeros
  var index = numbers.length-1 // para localizar o maior numero
  
  for(x = 0; x < size;x++){ // repetir o numero de vezes indicado pelo size
  
    total *= numbers[index]
    index--
    
  }

    return total;
