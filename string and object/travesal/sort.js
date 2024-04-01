const names = ['sakib','rakib','shahin','ashik' ,'Anis' ,'Habib'];
const namee  = names.sort();
console.log(namee);

// const numbers = [4,6,5,7,4,3];
/* 
Asending ====> small to large
decending ====> large to small
 */
// numbers.sort();
// console.log(numbers);

const numbers = [4,23,43,24,7,4 ,2];
const sort_Ase = [...numbers].sort(function(a,b){return a - b }
);
const sort_Dse = [...numbers].sort(function(a,b){return b - a});
console.log(sort_Ase);
console.log(sort_Dse);