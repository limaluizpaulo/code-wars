/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.  */

function solution(number){

let count = 0;
let sum = 0;

while(number > count){
    if((count % 3 == 0 ) && (count % 5 == 0 )){
        sum += count
    } else if(count % 3 == 0 ){
        sum += count
    } else if(count % 5 == 0){
        sum += count
    }

    count++
}

return sum

}


console.log(solution(10))