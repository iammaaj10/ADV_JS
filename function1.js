function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400))


function calculateCartPrice1(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice1(200,300,400))

const user={
    username:"Maaj",
    password:"123456789"
}
function handleobject(anyobject){

    console.log(`Username is ${anyobject.username} and password is ${anyobject.password}`);
}
handleobject(user)

// using arr
const arr=[200,300,400]
function returnsecondvalue(getarr){
    return  getarr[1];
}
console.log(returnsecondvalue(arr));