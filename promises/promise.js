const promise1=new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promise1.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
   setTimeout(()=>{
    console.log("Async task two");
    resolve()
   },1000)
}).then(function(){
    console.log("async two is resolved");
})

const promise3=new Promise(d=function(resolve,reject){
    setTimeout(()=>{
        resolve({username:"Maaj",email:"maajb122@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})

const promise4=new Promise(function(resolve,reject){
    let error=false
    if(!error)
    {
        resolve({username:"Maaj",pass:123})
    }
    else{
        reject('Error something went wrong')
    }
},1000)

promise4
.then((user)=>{
         console.log(user);
         return user.username
})
.then((username)=>{
    console.log(username);
})
.catch((err)=>{
    console.log(err);
}).finally(()=>console.log("finally  block executed"))

const promise5= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error= true
        if(!error){
            resolve({username:"Js",pass:123})
        }
        else{
            reject('Error JS went wrong')
        }
    },1000)
})

async function consumePromisefive(){
    try{
        const response=await promise5
    console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromisefive()

// async function getalluser(){
//   try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json()
  
//     console.log(data);
//   }catch(error){
//     console.log(error);
//   }

// }

//getalluser()

// .this()
fetch('https://api.github.com/users/iammaaj10')
.then((response)=>{
    return response.json()
    .then((data)=>{
        console.log(data);
    })
})
.catch((error)=>console.log(error));