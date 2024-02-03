const myheros =["ironman","thor","captain america"]

const myheros2=["batman","superman","wonder woman"]

// const myheros3=myheros.concat(myheros2)

// console.log(myheros3);

// const heros=[...myheros,...myheros2]
// console.log(heros);

// const arr3=[1,2,3,[4,5,6],[4,6,5],[2]]

// const arr4=arr3.flat(Infinity);
// console.log(arr4);

console.log(Array.isArray("Maaj"));
console.log(Array.from("Maaj"));
console.log(Array.from({name:"Maaj"}));//specify the array to convert of key or string otherwise it will declare empty array

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));
