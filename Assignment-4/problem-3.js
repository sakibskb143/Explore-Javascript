function deleteInvalids(array) {

    if(!Array.isArray(array)){
          return "Provide valid Array ."
    }

   const valid =[];
   for(const value of array){
     if(typeof value === 'number' && isFinite(value)){
        valid.push(value);
     }
   }
   
   return valid ;
}
const array ={num: [ 1 , 2 , 3 ]};
const answer = deleteInvalids(array);
console.log(answer);