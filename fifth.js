const name="maaj"
const repocount=50
// first type to declare string
console.log(name+repocount+"Alfiya");

// second type to declare string
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
// modern type to declre string
const gamename= new String('maaj')
console.log(gamename);

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());

 const newstring =gamename.substring(0,2)

 console.log(newstring);


 const anotherstring = gamename.slice(-4,4)
 console.log(anotherstring);
