const numbers = [1,2,3,4,5,6,7];
// doing reverse using building reverse function
// console.log(numbers);
// const reversed = numbers.reverse();
// console.log(numbers)

const rev_numbers = [];
for(const num of numbers)
{
    rev_numbers.unshift(num);
}
console.log(rev_numbers)