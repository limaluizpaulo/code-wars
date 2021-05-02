function minSum(arr) {
  
    arr.sort((a,b) => a - b)
    let total=0
    let index
    let indice2=arr.length-1
    
    for(index = 0;index <= ((arr.length-1)/2);index++){
        soma = arr[index]*arr[indice2]
        
        total += soma
        
        indice2--
    
    }
    
    
      return total
    }