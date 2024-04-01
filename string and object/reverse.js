const sentences = "I am learning web development.";
let reverse = '';
// for(const c of sentences){
//     reverse = c + reverse ;
// }

for(let i = 0 ; i < sentences.length ; i++)
{
    let c = sentences[i];
    reverse = c + reverse;
}

console.log(reverse);

const reversed = sentences.split('').reverse().join(' ');
console.log(reversed)
const convert = reversed.split(' ').reverse().join(' ');
console.log(convert);
