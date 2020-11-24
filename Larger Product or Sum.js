function sumOrProduct(array, n) {
    var product = 1
  var sum = 0
  
  array.sort((a,b) => a - b)
  
  for(var index=0; index < n;index++){
      product *= array[index]
  }
  
  index=array.length-1
  
  for(var index2=n;index2 > 0; index2--){
  
      sum += array[index]
      index--
      
  }
      
  if(sum > product) {
      return 'sum'
  } else if (product == sum) {
      return 'same'
  } else {
    return 'product'
  }
  
  
  }