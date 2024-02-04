const user={
    username:"Maaj",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
    }

}
// user.welcomeMessage();
// user.username="alfiya"
// user.welcomeMessage()
//console.log(this);

// function coffee ()
// {
//     let username="maaj"
//     console.log(this.username);
// }
// coffee()

const chai=()=>{
   let username="Maaj"
   console.log(this);
}
// chai()

// const add2=(num1,num2)=>{
//     return num1+num2
// }
//const add2=(num1,num2)=> num1+num2 //implicit return 
//const add2=(num1,num2)=> (num1+num2 )//implicit return 
const add2=(num1,num2)=>({username:"Maaj"})
// declare object 
console.log(add2(5,7));

