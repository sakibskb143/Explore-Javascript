const pen = { color:'blue' , price:5 , ink:'infinity'};
// using new for object creating
const pencil = new Object();
pencil.color = 'yellow';
pencil.price = 10;
console.log(pencil)

//  using object.create for creating object
const rubber = Object.create({});
rubber.color = 'white';
rubber.price = 15 ;
console.log(rubber);