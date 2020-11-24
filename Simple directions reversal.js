let arr = ["Begin on Road A","Right on Road B","Right on Road C","Left on Road D"]
var first  = arr[0].split(' ').splice(2,2).join(' ')
var last = arr[arr.length-1].split(' ').splice(2,2).join(' ')
var novo = ['Begin on '+last]
var direção 


for(var index = arr.length-2;index >= 0;index-- ){
    
   direção = arr[index+1].split(' ').splice(0,2).join(' ')

   if(direção == 'Right on'){
       direção = 'Left on '
   } else if (direção == 'Left on') {
        direção = 'Right on '
   }

    meio = arr[index].split(' ').splice(2,2).join(' ')
    novo.push(direção + meio)
    
    


}



console.log(novo)




