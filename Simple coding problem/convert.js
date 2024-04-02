// inch to feet

function inchTofeet (inch){
    const feet = inch/12 ;
    return feet ;
}
const feet = inchTofeet(75);
console.log(feet);

console.log("------------------");
function inchTofeetdifferently (inch)
{
    const feett = inch/12 ;
    const int_feet = parseInt(feett);
    const remaining_inch = parseInt(inch % 12) ;
    console.log(int_feet," ft ",remaining_inch,"inch");

}
inchTofeetdifferently(75);