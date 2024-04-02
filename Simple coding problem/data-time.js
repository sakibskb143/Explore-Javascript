// data of today
const today = new Date();
console.log(today.toLocaleDateString('en-GB'))
console.log(today.toDateString());
console.log(today.toISOString());
// others past or future date
const date = new Date('2026-10-19');
console.log(date.getDate())
console.log(date.getMonth())
const specific = new Date(2091,0,26);
console.log(specific.getDate());
specific.setMonth(10);
console.log(specific.toDateString());
// 'en-GB' great britian date squence like date/month/year
console.log(specific.toLocaleDateString('en-GB'));


// unix epoc for distance from data to date or second
//for this we can use moment.js
