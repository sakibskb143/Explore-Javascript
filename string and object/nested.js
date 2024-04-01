const university = {
    name: 'premier Uinversity',
    event: ['science fair' , 'robotis' ,'farewell'],
    unique: {
        color: 'blue',
        result:{
            cgpa: 4 ,
            merit : 'top'
        }
    }
    
}
console.log(university.unique.color)
university.unique.result.merit = "very good";
console.log(university.unique.result.merit)
university.event[1]= '16th decembar';
delete university.unique.color
console.log(university)
