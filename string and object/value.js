const person= {
    name: "Fariha Rashid Noha",
    age:24 ,
    profession: "Tutor",
    salary: 10000,
    married: "unmarried",
    'fav place': ['cox-bazar', 'chokbazar' , 'sajak']
}
person.salary = 40000;
person['name'] = "Sakib";
// console.log(person)

const proName = 'profession';
person[proName] = 'devops';
console.log(person)