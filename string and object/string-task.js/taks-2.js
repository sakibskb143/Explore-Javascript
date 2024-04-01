// const str = "Excuse me sir , this shirt is exclusive and all size like XXL ,Xl, M size is available";
// let modifiedStr = '';

// for(let i = 0; i < str.length; i++) {
//     if(str[i] === 'x') {
//         modifiedStr += 'y';
//     } else if (str[i] === 'X') {
//         modifiedStr += 'Y';
//     } else {
//         modifiedStr += str[i]; // Keep other characters unchanged
//     }
// }

// console.log(modifiedStr);

const str = "Excuse me sir , this shirt is exclusive and all size like XXL ,Xl, M size is available";

// const modifiedStr = str.split('').map(char => {
//     if (char === 'x') {
//         return 'y';
//     } else if (char === 'X') {
//         return 'Y';
//     }
//     return char;
// }).join('');

// console.log(modifiedStr);

const modify_str = str.split('').map(char => {
    if ( char == 'x') return 'y';
    else if(char == 'X') return 'Y';
    else {
        return char ;
    }
}).join('');
console.log(modify_str)