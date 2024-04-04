function monthlySavings(arr , livingCost) {
      
    if(!Array.isArray(arr) || !isFinite(arr)  || typeof livingCost !== 'number')
    {
        return "invalid input";
    }

    let totalSaving = 0 ;
    let totalIncome = 0 ;
    let totalTax = 0;

    for(const data of arr){
        if(data < 3000){
            totalIncome += data ;
        }else{

            const afterTax = data - data * 0.2 ;
            totalIncome += afterTax;

        }
    }
    const totalEaring = totalIncome - livingCost ;
    if(totalEaring >= 0){
        return totalEaring ;
    }
    else {
        return "earn more";
    }
   

}
const obj = { name: "toky", birthYear: 200, siteName: "Facebook" };
const output = monthlySavings(obj,100);
console.log(output)