const mobile = {
    brand : 'redmi 10 prime',
    price : 19000,
    color : 'white',
    camera : '50mp'
}

// for of : array
// for in : object

for(const key in mobile){
    console.log(key,' : ',mobile[key])
}

const forof = Object.keys(mobile);
console.log(forof);

for(const value of forof){
    console.log(value , "  " ,mobile[value])
}