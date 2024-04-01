const myobject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
const ag = myobject.age;
console.log(typeof(ag))
for(const attribue in myobject)
{
    console.log("Key: ",attribue," | type: ",typeof(myobject[attribue]));
}