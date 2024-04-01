const str = "Bangladesh Distinctly aheadou";
let ans =0 ;
for(let c of str){
    if(c == 'a') ans++;
    
}
// Count how many times a string has the letter a
console.log(ans);
const strr = str.toLowerCase();
const bool = strr.includes('a'&&'e'&&'i'&&'o'&&'u');
console.log(bool)
