// Number and math
const score =400
// console.log(score);
// console.log(typeof score);
const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));

const othername =23.654
// console.log(othername.toPrecision(3)); //to precise the value of given number 

const hunderds = 100000000
// console.log(hunderds.toLocaleString('en-IN')); // en-IN convert the number in the Indian value

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(3.88));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.1));


console.log((Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);
