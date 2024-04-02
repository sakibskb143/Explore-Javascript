function maxThree(num1,num2,num3){
    if(num1 > num2 && num1 > num3)
    {
        console.log(num1,"is grestest number between 3 numbers.");
    }
    else if (num2 > num1 && num2 > num3)
    {
        console.log(num2,"is grestest number between 3 numbers.");
    }
    else {
        console.log(num3,"is grestest number between 3 numbers.");
    }
}

maxThree(1,2,3);