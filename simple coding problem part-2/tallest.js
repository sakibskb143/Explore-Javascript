const heights = [76,56,45,79,56,81,66,55,90];

function maxHeights(numbers)
{
    let max_value = 0 ;
    let value = 0;
    for(const a of numbers)
    {
       if(max_value < a)
       {
          max_value = a ;
       }
      
    }
    return max_value;
   
}
const max = maxHeights(heights);
console.log("Maximum of amount this group is : ", max);