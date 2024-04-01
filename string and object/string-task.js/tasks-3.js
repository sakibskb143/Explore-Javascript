const str = "Excuse me sir , this shirt is exclusive and all size like XXL ,Xl, M size is available";
let modifiedStr = str[0].toUpperCase();

for(let i = 1; i < str.length; i++) {
    
    if(str[i-1] === ' ') {
        modifiedStr += str[i].toUpperCase();
    } else if (str[i-1] === ' ') {
        modifiedStr += str[i].toUpperCase();
    } else {
        modifiedStr += str[i]; // Keep other characters unchanged
    }
}

console.log(modifiedStr);
