// Calculate The Total Cost Of The Products In A Shopping Cart

const itemsList = [
    {name:'Shirt' , price:500},
    {name:'Pant' , price:800},
    {name:'T-Shirt' , price:400},
    {name:'Shoe' , price:1200},
    {name:'Watch' , price:500}
]

function totalPrice(itemsList){
    let sum = 0 ;
    for(const data of itemsList){
        sum += data.price;
    }
    return sum ;
}
const total_Amount = totalPrice(itemsList);
console.log("Total Cost is : ",total_Amount);