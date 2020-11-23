var stones ="GBRGGRBBBBRRGGGB"
var contador = 0
var index1= 0
var index2 = 0


for(index1 = 0;index1 < stones.length;index1++){
    index2++
    if(stones[index1] == stones[index2]){
        contador++ 
    } 

}

console.log(contador);



/*

for(index = 0;index <= texto.length;index ++){
    
    if(texto[index] == 'R'){
        R++
    } else if(texto[index] == 'G'){
        G++
    } else if(texto[index] == 'B'){
        B++
    }

}

console.log(R,G,B)



//n = String(obj.sort((a,b) => b - a))

*/