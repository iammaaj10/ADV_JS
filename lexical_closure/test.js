const arr=[]
//%DebugPrint(arr)

// need v8 debug to run these code 


const arr2=[1,2,3,4,5,6]
// packed smi elements
arr2.push(8.0)
// packed double elements

arr2.push('7')
// packed elemnts

arr2[10]=11
// holey elements

console.log(arr2);
console.log(arr2.length);
console.log(arr2[9]);

// bound check
// hasOwnProperty(arr2,9)
// hasOwnProperty(arr2.prototype,10)
// hasOwnProperty(Object.prototype,10)

// holes are very expensive in js

const arr3= [1,2,3,4,5]
console.log(arr3[8]);

//smi>double>packed continous
//hsmi>hdouble>hpacked holey
