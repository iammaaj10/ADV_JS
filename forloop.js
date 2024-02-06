// loops 
//for
for(let i=0;i<=10;i++){
    const ele=i
    if(ele==5)
    {
       // console.log("5 is best number");
    }
   // console.log(ele);
    
}

for (let i = 0; i <=10; i++) {
    //console.log(`Oueter loop${i}`);
    for (let j = 0; j <=10; j++) {
       // console.log(`Inner loop ${j} and inner loop ${i}`);
       // console.log(i+'*' + j + '=' + i*j);
    }    
}

let arr=["ironman","superman","spiderman"]

for (let j = 0; j < arr.length; j++) {
    const element = arr[j];
    //console.log(element);
}

// break and contine

for (let j = 1; j <=20; j++) {
    if(j==5)
    {
        console.log(`Detected 5`);
        break // after the 5 it will be treminated
    }
    console.log(`Value of i is ${j}`);
}
for (let j = 1; j <=20; j++) {
    if(j==5)
    {
        console.log(`Detected 5`);
        continue // 5 will be skip
    }
    console.log(`Value of i is ${j}`);
}