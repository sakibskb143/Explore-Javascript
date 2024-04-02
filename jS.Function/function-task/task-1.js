/*
*Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

 */
function make_avg(age){
    let total_sum = 0 ;
    const len = age.length ;
    for(const data of age){
        total_sum += data ;
    }
    return total_sum/len ;

}
const age = [23,21,5,11,15,17,36];
const average_age = make_avg(age);
console.log("Average age is : ",average_age);