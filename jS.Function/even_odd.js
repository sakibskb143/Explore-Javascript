function even_odd(num1){
    if(num1%2 == 0) return "even" ;
    else return "odd";
}
function total_sum (arr){
    let sum = 0;
   for(const num of arr)
   {
       sum+=num;
   }
   return sum ;
}

const arr = [2,3,6,5,7,4];
for(const ar of arr){
    console.log(ar , "is odd number :" ,even_odd(ar));
}
console.log("-------------------total sum -------------------")
console.log(total_sum(arr));