const userEmail=[]

if(userEmail){
    console.log("Got the user email");
}
else{
    console.log("Dont have the email");
}

if(userEmail.length===0){
    console.log("the array is empty");
}

const emptyob={}
if(Object.keys(emptyob).length===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator(??): null undefined

let val1
// val1 =5 ?? 10
//val1=null ?? 10
//val1 =undefined ?? 15
val1 =null ?? 10 ?? 15 // whatever the first value it will print that value
console.log(val1);

// Terniary Operator
// condition ? true: false

const iceteaprice=100
iceteaprice<=80?console.log("Less than 80"):console.log("More than 80");