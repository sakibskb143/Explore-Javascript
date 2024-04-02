// generate random number between 10 to 20 javascript


function randomNumbr() {
    const randm =Math.round(Math.random()*20 );
    if(randm < 10 ){
       return randomNumbr();
    }
    else{
        return randm ;
    }
}
const random_vale = randomNumbr();
console.log(random_vale);
