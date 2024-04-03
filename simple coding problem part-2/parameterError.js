function multiply (num1 , num2){
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return "Please provides numbers ."
    }
    const result = num1 * num2 ;
    return result ;
}

const result = multiply(2,'s');
 console.log(result);

function addName (first , second){
    if(typeof first !== 'string'|| typeof second !== 'string'){
        return "Please provide argument  as a string.";
    }
   
    const full_name = first +' '+ second ;
    return full_name ;
}
const full_name = addName('fariha', 4);
console.log(full_name)