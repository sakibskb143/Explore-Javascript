// Removing Duplicate element from array

function removeDuplicate(dataset){
    const orginal_value = [];
    for(const value of dataset)
    {
        if(orginal_value.includes(value) === false) {
            orginal_value.push(value);
        }
    }
    return orginal_value ;
}
const names = ['sakib','rakib','rakib','sakib','sourav','sourav','bidhan'];
const numbers = [1,1,2,4,4,6,4,7,5,7,4,5,5,8,9,8,9];
const namess = removeDuplicate(names);
const number = removeDuplicate(numbers);
console.log(namess);
console.log(number);