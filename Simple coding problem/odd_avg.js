// finding odd avarage value
function odd_avg(numbers)
{
    let total_sum = 0 ;
    const odds =[];
    
    for(const num of numbers)
    {
        if(num%2 == 1){
            total_sum+=num;
            odds.push(num);
        }
    }
    const len = odds.length;
    const avarage = total_sum / len ;
    return avarage ;
}
const numbers = [1,2,3,4,5,6,7,8,9,10];
const avarage = odd_avg(numbers);
console.log("Avarage of this numbers are : ",avarage);