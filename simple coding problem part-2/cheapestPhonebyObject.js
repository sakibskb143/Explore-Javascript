const phonelist = [
    { name: 'Samsung', price: 10000 , camera: '50mp',color: 'white'},
    { name: 'Realme', price: 12000 , camera: '50mp',color: 'white'},
    { name: 'Xoami', price: 15000 , camera: '50mp',color: 'white'},
    { name: 'Infinix', price: 8000 , camera: '50mp',color: 'white'},
    { name: 'OnePlus', price: 20000 , camera: '50mp',color: 'white'},
    { name: 'Iphone', price: 120000 , camera: '50mp',color: 'white'}
]

function CheapPhonePrice(phonelist)
{
    let lowPrice = phonelist[0];
  
    for(const data of phonelist)
    {
        if(lowPrice.price > data.price)
        {
            lowPrice = data ;
          
        }
    }


   return lowPrice ;
}
const cheapPrice = CheapPhonePrice(phonelist);

console.log("Cheapest Phone is :" ,cheapPrice  );