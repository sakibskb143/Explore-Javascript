function evenNumberOnly(number){
    const evens = [];
    for(const num of number)
    {
        if(num%2 ==0)
        {
            console.log(num);
            evens.push(num);
        }
    }
    return evens ;
}
const number = [2,5,3,6,8,7];
const evens = evenNumberOnly(number);
console.log(evens);