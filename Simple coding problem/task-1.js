const arr = "I tring to learn javascript from programming hero.";
const arr1 = arr.split(' ');
console.log(arr1);

function longestword (arr1){
    let maxlen = 0 ;
    let maxstr ;
    for(const str of arr1)
    {
        const len = str.length ;
        if(maxlen < len){
            maxlen = len ;
            maxstr = str;
        }
       
    }
    console.log("longest word of this stirng is : ",maxstr , "length is : ",maxlen);
   
}
const longestword1  = longestword(arr1);
console.log(longestword1);
