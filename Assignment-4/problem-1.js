function calculateMoney(ticketSale) {
    if(ticketSale <0){
        return "Provide positive numbers.";
    }
    const ticketPrice = ticketSale*120;
    const stuff_cost = 500 + 8*50 ;
    const total_income = ticketPrice - stuff_cost ;
    return total_income ;

}
const totalIncome = calculateMoney(-93);
console.log(totalIncome);